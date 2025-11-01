export class PaginaBase {
    visitarPaginaInicial() {
        cy.visit('/');
        cy.get('body').should('be.visible');  
    }

    fazerLogin(emailUsuario, senha) {
        cy.get('a[href="/login"]').should('be.visible').click(); 
        cy.get('[data-qa="login-email"]').type(emailUsuario);
        cy.get('[data-qa="login-password"]').type(senha);
        cy.get('[data-qa="login-button"]').click();
    }

    fazerLogout() {
        cy.get('a[href="/logout"]').should('be.visible').click(); 
        cy.get('a[href="/"]').should('be.visible');
    }

    deletarConta() {
        cy.get('a[href="/delete_account"]').should('be.visible').click(); 
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }
}
