import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("un usuario se encuentra en la plataforma de GHT", function () {
    cy.visit("/#/")
})

When("acceda con sus credenciales en la plataforma de GHT", function () {
    cy.fixture("credenciales").then((the) => {
        cy.get('input#txtUser').type(the.user);
        cy.get('input#txtPassword').type(the.pass);
        cy.get('button.btn.btn-login').should('be.visible').click(); // Login
    });
})

When("acceda al modulo de crear usuario en la plataforma de GHT", function () {
    cy.get('#btn-menu').should('be.visible').click(); // Menu
    cy.contains('Digital Transformation').should('be.visible').click(); // Digital Transformation
    cy.contains('Configuración').should('be.visible').click(); // Configuración
    cy.contains('Usuarios').should('be.visible').click(); // Usuarios
})

When("haga click en el boton crear nuevo usuario", function () {
    cy.get(':nth-child(1) > .accslide > .content > :nth-child(1) > .col-md-12 > .col-md-1 > img').click()
    cy.get('[ng-show="actionBarSettings.add"] > .ng-binding').click(); // Add
})


When("digite toda la información del usuario", function () {
    cy.get('body > ui-view > div > div > div:nth-child(4) > ui-view > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > div:nth-child(2) > div > div.row > div > div.row.ng-scope > div.col-md-9 > div > label.switch.col-md-4 > span').should('be.visible').click()
    cy.fixture("credenciales").then((the) => {
        cy.get('#input_1').type(the.data_user1);
        cy.get('#input_2').type(the.data_user1);
        cy.get('#input_3').type(the.data_user2);
        cy.get('#input_4').type(the.pass_user1)
        cy.get('#input_5').type(the.pass_user1)

    });



})

When("haga click sobre el boton guardar", function () {
    cy.get('.btnSave').click();
})

Then("la plataforma de GHT debe crear el usuario", function () {
    cy.url().should('include', "users")
})


