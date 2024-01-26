import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("que un usuario se encuentra en la plataforma de GHT", function () {
  cy.visit("/#/")
})

When("quiera ingresar sesion a la plataforma de GHT con sus credenciales de acceso", function () {
    cy.fixture("credenciales").then((the) => {
        cy.get('input#txtUser').type(the.user);
        cy.get('input#txtPassword').type(the.pass);
    });
})


When("haga click en el inicio de sesion a la plataforma de GHT", function () {
  cy.get('button.btn.btn-login').should('be.visible').click(); // Login
})

Then("la plataforma de GHT debe permitirle ingresar", function () {
  cy.url().should('include', "home")
})
