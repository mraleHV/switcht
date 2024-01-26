import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("que el usuario se encuentra en el login", function () {
    cy.visit("/#/")
})

When("acceda con sus credenciales de acceso en la plataforma de GHT", function () {
    cy.fixture("credenciales").then((the) => {
        cy.get('input#txtUser').type(the.user);
        cy.get('input#txtPassword').type(the.pass);
        cy.get('button.btn.btn-login').should('be.visible').click(); // Login
    });
})

When("acceda al modulo de usuario en la plataforma de GHT", function () {
    cy.get('#btn-menu').should('be.visible').click(); // Menu
    cy.contains('Digital Transformation').should('be.visible').click(); // Digital Transformation
    cy.contains('Configuración').should('be.visible').click(); // Configuración
    cy.contains('Usuarios').should('be.visible').click(); // Usuarios
})


When("seleccione un usuario en la plataforma de GHT", function () {
    cy.get('[col-id="email_1"] > .ag-cell-label-container > .ag-header-cell-menu-button > .glyphicon').click() // Email filter
    cy.get('#selectAllContainer').click() // Select All
    cy.fixture("credenciales").then((the) => {
        cy.get('.ag-filter-filter').type(the.data_user2);
    });
    cy.get('div#richList.ag-set-filter-list').first().should('have.length', 1) //It should have 1 length
    cy.get('.ag-set-filter-item').click() // Select 1 item
    cy.get('.ag-tab > .glyphicon').click()


   

    


})

When("haga click en el boton eliminar usuario", function () {
    cy.get('.button-action-grid > .glyphicon').click()
    cy.wait(2000)
    cy.get('.confirm').click()
})

Then("la plataforma de GHT debe eliminar el usuario", function () {
  cy.url().should('include', "users")
})


