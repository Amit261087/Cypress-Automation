// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


Cypress.Commands.add('getIframe', (iframe)=>{
  return cy.get('#mce_0_ifr')
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap)
})


Cypress.Commands.add('clicklink', (label)=>{
  cy.get('a').contains(label).click()
})

/*Cypress.Command.Overwrite('contains',(originalFn, subject, filter, text, options = {}) => {
  if(typeof text === 'object'){
  options = text
  text = filter
  filter = undefined
}
options.matchCase = false

return originalFn(subject, filter, text, options)
})*/

Cypress.Commands.add('loginapp', (email, password)=>{
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get("button[class='button-1 login-button']").click()
})