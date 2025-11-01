const { faker } = require('@faker-js/faker');
import { AcoesPaginaBase } from '../support/actions/base.actions';
import { AcoesAutomationExercise } from '../support/actions/automationExercise.actions';
import { locatorsAutomationExercise } from '../support/locators/automationExercise.locators';
import { ModuloUsuario } from '../modules/user.module';

const acoesPaginaBase = new AcoesPaginaBase();
const acoesAutomationExercise = new AcoesAutomationExercise();

describe('Suíte de Testes Automation Exercise', () => {
    beforeEach(() => {
        acoesPaginaBase.visitarPaginaInicial(); 
        acoesAutomationExercise.verificarPaginaInicialVisivel();
    });

    it('#1 registrar um usuário', () => {
        const nomeAleatorio = faker.person.fullName();
        const emailAleatorio = faker.internet.email();
        const senhaAleatoria = faker.internet.password();

        acoesAutomationExercise.clicarBotaoLogin(); 
        ModuloUsuario.registrarUsuario(nomeAleatorio, emailAleatorio, senhaAleatoria);
        acoesPaginaBase.deletarConta();
    });

    it('#2 fazer login com email e senha corretos', () => {
        const emailUsuario = Cypress.env('USER_EMAIL');
        const senhaUsuario = Cypress.env('USER_PASSWORD');

        acoesAutomationExercise.clicarBotaoLogin();
        acoesAutomationExercise.preencherFormularioLogin(emailUsuario, senhaUsuario);
        cy.contains(`Logged in as`).should('be.visible'); 
    });

    it('#3 fazer login com email e senha incorretos', () => {
        acoesAutomationExercise.clicarBotaoLogin();
        acoesAutomationExercise.preencherFormularioLogin('testegrvtt@gmail.com', 'senha-errada');
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });

    it('#4 fazer logout do usuário', () => {
        const nomeUsuario = Cypress.env('USER_NAME');
        const emailUsuario = Cypress.env('USER_EMAIL');
        const senhaUsuario = Cypress.env('USER_PASSWORD');

        acoesPaginaBase.fazerLogin(emailUsuario, senhaUsuario);
        cy.contains(`Logged in as ${nomeUsuario}`).should('be.visible');
        acoesPaginaBase.fazerLogout();
        acoesAutomationExercise.verificarPaginaInicialVisivel();
    });

    it('#5 tentar registrar um usuário existente', () => {
        acoesPaginaBase.visitarPaginaInicial();
        acoesAutomationExercise.clicarBotaoLogin();
        acoesAutomationExercise.verificarCabecalhoNovoUsuario();
        const nomeUsuario = Cypress.env('USER_NAME');
        const emailUsuario = Cypress.env('USER_EMAIL');
        acoesAutomationExercise.preencherFormularioRegistro(nomeUsuario, emailUsuario);
        acoesAutomationExercise.verificarMensagemEmailExistente();
    });

    it('#6 validar formulário de contato', () => {
        acoesPaginaBase.visitarPaginaInicial();
        const nomeAleatorio = faker.person.fullName();
        const emailAleatorio = faker.internet.email();
        const assuntoAleatorio = faker.lorem.sentence();
        const mensagemAleatoria = faker.lorem.paragraph();

        cy.get(locatorsAutomationExercise.linkContato).click();
        cy.get(locatorsAutomationExercise.tituloContato).should('be.visible');
        cy.get(locatorsAutomationExercise.campoNomeContato).type(nomeAleatorio);
        cy.get(locatorsAutomationExercise.campoEmailContato).type(emailAleatorio);
        cy.get(locatorsAutomationExercise.campoAssuntoContato).type(assuntoAleatorio);
        cy.get(locatorsAutomationExercise.campoMensagemContato).type(mensagemAleatoria);

        cy.get(locatorsAutomationExercise.campoArquivoUpload).attachFile('test-file.jpeg');

        cy.get(locatorsAutomationExercise.botaoEnviarContato).click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Success! Your details have been submitted successfully.');
        });
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

        cy.get(locatorsAutomationExercise.botaoVoltarInicio).click();

        acoesAutomationExercise.verificarPaginaInicialVisivel();
    });

    it('#8 verificar produtos e página de detalhes do produto', () => {
        acoesPaginaBase.visitarPaginaInicial();
        cy.get(locatorsAutomationExercise.linkProdutos).click();
        cy.contains('All Products').should('be.visible');
        cy.get(locatorsAutomationExercise.itensProdutos).should('be.visible');
        cy.get(locatorsAutomationExercise.linkDetalhesProduto).click();

        cy.get(locatorsAutomationExercise.informacoesProduto).should('be.visible');
        cy.get(locatorsAutomationExercise.tituloProduto).should('have.text', 'Blue Top');
        cy.get(locatorsAutomationExercise.informacoesProduto + ' p').contains('Category: Women > Tops').should('be.visible');
        cy.get(locatorsAutomationExercise.informacoesProduto + ' span span').should('have.text', 'Rs. 500');
        cy.get(locatorsAutomationExercise.informacoesProduto + ' p').contains('Availability: In Stock').should('be.visible');
        cy.get(locatorsAutomationExercise.informacoesProduto + ' p').contains('Condition: New').should('be.visible');
        cy.get(locatorsAutomationExercise.informacoesProduto + ' p').contains('Brand: Polo').should('be.visible');
    });

    it('#9 buscar produto', () => {
        acoesPaginaBase.visitarPaginaInicial();
        cy.get(locatorsAutomationExercise.linkProdutos).click();
        cy.contains('All Products').should('be.visible');
        cy.get(locatorsAutomationExercise.campoBuscaProduto).type('Blue Top');
        cy.get(locatorsAutomationExercise.botaoBuscarProduto).click();
        cy.contains('Searched Products').should('be.visible');
        cy.get(locatorsAutomationExercise.itensProdutos).should('be.visible');
        cy.get(locatorsAutomationExercise.infoProduto).each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    });

    it('#10 verificar inscrição na página inicial', () => {
        acoesPaginaBase.visitarPaginaInicial();
        const emailAleatorio = faker.internet.email();
    
        cy.scrollTo('bottom');

        cy.contains('h2', 'Subscription').should('be.visible');

        cy.get(locatorsAutomationExercise.campoEmailInscricao).type(emailAleatorio);
        cy.get(locatorsAutomationExercise.botaoInscrever).click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    });

    it('#15 realizar pedido: registrar antes do checkout', () => {
        acoesPaginaBase.visitarPaginaInicial();
        const nomeAleatorio = faker.person.fullName();
        const emailAleatorio = faker.internet.email();
        const senhaAleatoria = faker.internet.password();
        const nomeCartao = faker.person.fullName();
        const numeroCartao = faker.finance.creditCardNumber();
        const codigoSeguranca = faker.finance.creditCardCVV();
        const mesExpiracao = '12';
        const anoExpiracao = '2025';

        acoesAutomationExercise.clicarBotaoLogin();

        acoesAutomationExercise.preencherFormularioRegistro(nomeAleatorio, emailAleatorio);
        cy.contains(locatorsAutomationExercise.cabecalhoInformacoesConta).should('be.visible');

        cy.get(locatorsAutomationExercise.radioGeneroMasculino).check();
        cy.get(locatorsAutomationExercise.campoSenha).type(senhaAleatoria);
        cy.get(locatorsAutomationExercise.selectDia).select('15');
        cy.get(locatorsAutomationExercise.selectMes).select('May');
        cy.get(locatorsAutomationExercise.selectAno).select('1995');
        cy.get(locatorsAutomationExercise.campoPrimeiroNome).type('test');
        cy.get(locatorsAutomationExercise.campoUltimoNome).type('Test');
        cy.get(locatorsAutomationExercise.campoEndereco).type(faker.location.streetAddress());
        cy.get(locatorsAutomationExercise.campoEstado).type(faker.location.state());
        cy.get(locatorsAutomationExercise.campoCidade).type(faker.location.city());
        cy.get(locatorsAutomationExercise.campoCEP).type(faker.location.zipCode());
        cy.get(locatorsAutomationExercise.campoTelefone).type(faker.phone.number());
        cy.get(locatorsAutomationExercise.botaoCriarConta).click();

        cy.contains('Account Created!').should('be.visible');
        cy.get(locatorsAutomationExercise.botaoContinuar).click();

        cy.contains(`Logged in as ${nomeAleatorio}`).should('be.visible');

        cy.get(locatorsAutomationExercise.linkProdutos).click();
        cy.get(locatorsAutomationExercise.linkDetalhesProduto).click();
        cy.get(locatorsAutomationExercise.botaoAdicionarCarrinho).click();
        cy.get(locatorsAutomationExercise.linkVisualizarCarrinho).click();

        cy.contains('Shopping Cart').should('be.visible');
        cy.get(locatorsAutomationExercise.botaoCheckout).click();
        cy.contains('Address Details').should('be.visible');
        cy.contains('Review Your Order').should('be.visible');

        cy.get(locatorsAutomationExercise.campoMensagemPedido).type('Por favor, faça corretamente os testes.');
        cy.get(locatorsAutomationExercise.linkPagamento).click();

        cy.get(locatorsAutomationExercise.campoNomeCartao).type(nomeCartao);
        cy.get(locatorsAutomationExercise.campoNumeroCartao).type(numeroCartao);
        cy.get(locatorsAutomationExercise.campoCVV).type(codigoSeguranca);
        cy.get(locatorsAutomationExercise.campoMesExpiracao).type(mesExpiracao);
        cy.get(locatorsAutomationExercise.campoAnoExpiracao).type(anoExpiracao);

        cy.get(locatorsAutomationExercise.botaoPagar).click();
        cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible');

        cy.get(locatorsAutomationExercise.botaoDeletarConta).click();
        cy.contains('Account Deleted!').should('be.visible');
        cy.get(locatorsAutomationExercise.botaoContinuar).click();
    });
});