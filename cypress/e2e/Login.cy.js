/// <reference types="cypress" />

const user = "alejandro.hernandez@imagineapps.co"
const pass = "123456789"
let token = ''

describe('GHT Login', () => {
  beforeEach(() => {
    cy.viewport(1600, 900)
    cy.visit('https://verdadunicawebalpha.azurewebsites.net/'); //Login
    cy.request({
        method: 'POST',
        url: 'https://verdadunicaapialpha.azurewebsites.net/api/Authentication/api/login?isEmbedded=false&password=U2FsdGVkX1%2Fcn5puHhtomQzimvg8Okj1Q5sfSuxDgiM%3D&username=U2FsdGVkX19jLxTtBb5nOJgxWrw3iUAJch9PSAZ01oKz4OF8RC%2BEu03FGcZuxNyiXcCHq1%2B23zSQAhH5xE1dhw%3D%3D',

    }).then((response) => {
        token = response.body.token; {
        }
    })

})
  it('Login', () => {
    cy.get('input#txtUser').should('be.visible').type(user); // User Input
    cy.get('input#txtPassword').should('be.visible').type(pass); // Password Input
    cy.get('button.btn.btn-login').should('be.visible').click(); // Login
  })
})

