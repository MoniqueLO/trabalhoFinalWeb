// Locators da página Automation Exercise
export const locatorsAutomationExercise = {
    // Página inicial
    paginaInicial: 'body',
    
    // Login / Registro
    botaoLogin: 'a[href="/login"]', 
    cabecalhoNovoUsuario: 'New User Signup!',
    mensagemEmailJaExiste: 'Email Address already exist!',
    campoNomeRegistro: '[data-qa="signup-name"]',
    campoEmailRegistro: '[data-qa="signup-email"]',
    botaoCadastrar: '[data-qa="signup-button"]',
    cabecalhoInformacoesConta: 'Enter Account Information',
    campoEmailLogin: '[data-qa="login-email"]',
    campoSenhaLogin: '[data-qa="login-password"]',
    botaoEntrar: '[data-qa="login-button"]',
    
    // Conta
    botaoDeletarConta: 'a[href="/delete_account"]', 
    botaoLogout: 'a[href="/logout"]',
    
    // Formulário de contato
    linkContato: 'a[href="/contact_us"]',
    tituloContato: 'h2.title.text-center',
    campoNomeContato: '[data-qa="name"]',
    campoEmailContato: '[data-qa="email"]',
    campoAssuntoContato: '[data-qa="subject"]',
    campoMensagemContato: '[data-qa="message"]',
    campoArquivoUpload: 'input[name="upload_file"]',
    botaoEnviarContato: '[data-qa="submit-button"]',
    botaoVoltarInicio: 'a.btn.btn-success[href="/"]',
    
    // Produtos
    linkProdutos: 'a[href="/products"]',
    itensProdutos: '.features_items',
    linkDetalhesProduto: 'a[href="/product_details/1"]',
    informacoesProduto: '.product-information',
    tituloProduto: '.product-information h2',
    campoBuscaProduto: '#search_product',
    botaoBuscarProduto: '#submit_search',
    infoProduto: '.features_items .productinfo',
    botaoAdicionarCarrinho: '.product-information .btn.btn-default.cart',
    linkVisualizarCarrinho: 'p.text-center a[href="/view_cart"]',
    
    // Inscrição (Subscription)
    campoEmailInscricao: '#susbscribe_email',
    botaoInscrever: '#subscribe',
    
    // Carrinho e Checkout
    botaoCheckout: '.btn.btn-default.check_out',
    campoMensagemPedido: 'textarea[name="message"]',
    linkPagamento: 'a[href="/payment"]',
    
    // Pagamento
    campoNomeCartao: '[data-qa="name-on-card"]',
    campoNumeroCartao: '[data-qa="card-number"]',
    campoCVV: '[data-qa="cvc"]',
    campoMesExpiracao: '[data-qa="expiry-month"]',
    campoAnoExpiracao: '[data-qa="expiry-year"]',
    botaoPagar: '[data-qa="pay-button"]',
    
    // Informações da conta (registro completo)
    radioGeneroMasculino: '#id_gender1',
    radioGeneroFeminino: '#id_gender2',
    campoSenha: '[data-qa="password"]',
    selectDia: '[data-qa="days"]',
    selectMes: '[data-qa="months"]',
    selectAno: '[data-qa="years"]',
    campoPrimeiroNome: '[data-qa="first_name"]',
    campoUltimoNome: '[data-qa="last_name"]',
    campoEndereco: '[data-qa="address"]',
    campoEstado: '[data-qa="state"]',
    campoCidade: '[data-qa="city"]',
    campoCEP: '[data-qa="zipcode"]',
    campoTelefone: '[data-qa="mobile_number"]',
    botaoCriarConta: '[data-qa="create-account"]',
    botaoContinuar: '[data-qa="continue-button"]'
}
