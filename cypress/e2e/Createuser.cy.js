/// <reference types="cypress" />

const user = "alejandro.hernandez@imagineapps.co"
const pass = "123456789"
let token = ''

describe('GHT', () => {
    beforeEach(() => {
        cy.viewport(1600, 900)
        cy.visit('https://verdadunicawebalpha.azurewebsites.net/'); //Login
        cy.get('input#txtUser').should('be.visible').type(user); // User Input
        cy.get('input#txtPassword').should('be.visible').type(pass); // Password Input
        cy.get('button.btn.btn-login').should('be.visible').click(); // Login
        cy.request({
            method: 'POST',
            url: 'https://verdadunicaapialpha.azurewebsites.net/api/Authentication/api/login?isEmbedded=false&password=U2FsdGVkX1%2Fcn5puHhtomQzimvg8Okj1Q5sfSuxDgiM%3D&username=U2FsdGVkX19jLxTtBb5nOJgxWrw3iUAJch9PSAZ01oKz4OF8RC%2BEu03FGcZuxNyiXcCHq1%2B23zSQAhH5xE1dhw%3D%3D',

        }).then((response) => {
            token = response.body.token; {
            }
        })
        cy.wait(6000); // Wait for

    })

    

    it('Creacion de usuario', () => {
        cy.get('#btn-menu').should('be.visible').click(); // Menu
        cy.contains('Digital Transformation').should('be.visible').click(); // Digital Transformation
        cy.contains('Configuración').should('be.visible').click(); // Configuración
        cy.contains('Usuarios').should('be.visible').click(); // Usuarios
        cy.get('[ng-show="actionBarSettings.add"] > .ng-binding').click(); // Add
        cy.get('#input_1').should('be.empty').type('Juan')
        cy.get('#input_2').should('be.empty').type('Andres')
        cy.get('#input_3').should('be.empty').type('juanandres@yopmail.com')
        cy.get('body > ui-view > div > div > div:nth-child(4) > ui-view > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > div:nth-child(2) > div > div.row > div > div.row.ng-scope > div.col-md-9 > div > label.switch.col-md-4 > span').should('be.visible').click()
        cy.get('#input_4').type(pass)
        cy.get('#input_5').type(pass)
        cy.get('.btnSave').click();

        cy.request({
            method: 'GET',
            url: 'https://verdadunicaapialpha.azurewebsites.net/api/User/getUser',
            headers: {
                Authorization: 'Bearer ' + token,
                accept: 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })








    })

})
