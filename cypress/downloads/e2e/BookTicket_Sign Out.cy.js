describe('Book Ticket', function(){

    
    it('Book Ticket - Sign Off', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.get("input[name='userName']").type('abc@gmail.com')
        cy.get("input[name='password']").type('May@2023')
        cy.get("input[name='submit']").click()
        cy.title().should('eq', 'Login: Mercury Tours')
        cy.xpath("//h3[normalize-space()='Login Successfully']").should('have.contain', 'Login Successfully')
        cy.xpath("//a[normalize-space()='SIGN-OFF']").should('be.visible')
        .click()
        cy.title().should('eq', 'Welcome: Mercury Tours')

    })


})