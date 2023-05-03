it('no inscription', () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('.mb-6 > .body-2-bold').click();
    cy.get('#firstName').type("js");
    cy.get('#lastName').type("derouet");
    cy.get('#signup-email').type("i.d@gmail.com");
    cy.get('#signup-password').type("j");
    cy.get('._2OVE0h6V').click();
    cy.get('[data-qa="signup-submit-button"]').click();
  })