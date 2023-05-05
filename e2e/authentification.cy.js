it('authentification', () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('.mb-6 > .body-2-bold').click();
    cy.get('#signin-email').type("i.d@gmail.com");
    cy.get('#signin-password').type("hbfgsFS54");
    cy.get('[data-qa="signin-submit-button"]').click();
    cy.url().should('include', 'dashboard')
  })
