import { locatorsPaginaBase } from '../locators/base.locators'

// Actions (métodos) da página base
export class AcoesPaginaBase {
    visitarPaginaInicial() {
        cy.visit('/')
        cy.get(locatorsPaginaBase.corpo).should('be.visible')
    }

    fazerLogin(emailUsuario, senha) {
        cy.get(locatorsPaginaBase.linkLogin).should('be.visible').click()
        cy.get(locatorsPaginaBase.campoEmailLogin).type(emailUsuario)
        cy.get(locatorsPaginaBase.campoSenhaLogin).type(senha)
        cy.get(locatorsPaginaBase.botaoEntrar).click()
    }

    fazerLogout() {
        cy.get(locatorsPaginaBase.linkLogout).should('be.visible').click()
        cy.get(locatorsPaginaBase.linkInicio).should('be.visible')
    }

    deletarConta() {
        cy.get(locatorsPaginaBase.linkDeletarConta).should('be.visible').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get(locatorsPaginaBase.botaoContinuar).click()
    }
}
