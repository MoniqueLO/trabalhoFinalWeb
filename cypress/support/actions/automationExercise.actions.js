import { locatorsAutomationExercise } from '../locators/automationExercise.locators'

// Actions (métodos) da página Automation Exercise
export class AcoesAutomationExercise {
    clicarBotaoLogin() {
        cy.get(locatorsAutomationExercise.botaoLogin).click()
    }

    verificarPaginaInicialVisivel() {
        cy.get(locatorsAutomationExercise.paginaInicial).should('be.visible')
    }

    preencherFormularioLogin(email, senha) {
        cy.get(locatorsAutomationExercise.campoEmailLogin).type(email)
        cy.get(locatorsAutomationExercise.campoSenhaLogin).type(senha)
        cy.get(locatorsAutomationExercise.botaoEntrar).click()
    }

    preencherFormularioRegistro(nome, email) {
        cy.get(locatorsAutomationExercise.campoNomeRegistro).type(nome)
        cy.get(locatorsAutomationExercise.campoEmailRegistro).type(email)
        cy.get(locatorsAutomationExercise.botaoCadastrar).click()
    }

    verificarCabecalhoNovoUsuario() {
        cy.contains(locatorsAutomationExercise.cabecalhoNovoUsuario).should('be.visible')
    }

    verificarMensagemEmailExistente() {
        cy.contains(locatorsAutomationExercise.mensagemEmailJaExiste).should('be.visible')
    }
}
