import 'cypress-iframe'

describe('Handling Frames', function(){
    
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/frames')
        cy.get("a[href='/iframe']").click()
    })

    it('Approach 1', function(){
        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        cy.wait(3000)
        iframe.clear().type('Welcome {ctrl+a}')
        cy.wait(5000)
        cy.get("[aria-label='Bold']").click()
    })

    it('Approach 2 using custom command', function(){
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
        cy.wait(5000)
        cy.get("[aria-label='Bold']").click()
    })

    it.only('Approach 3 using iFrame Plugin', function(){
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
        cy.wait(5000)
        cy.get("[aria-label='Bold']").click()
    })
})