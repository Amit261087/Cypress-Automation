describe('Navigations', function(){
    it('Navigation Test', function(){
        cy.visit('https://demo.opencart.com/')

        cy.title().should('eq', 'Your Store')

        cy.get(':nth-child(7) > .nav-link').click()
        cy.title().should('eq', 'Cameras')
        cy.get('h2').should('have.text', 'Cameras')

        cy.go('back')
        cy.title().should('eq', 'Your Store')
        
        cy.go('forward')
        cy.title().should('eq', 'Cameras')
        cy.get('h2').should('have.text', 'Cameras')

        cy.reload()

    })
})