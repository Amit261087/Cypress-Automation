describe('Book Ticket', function(){

    

    it('Book Ticket - Sign In', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.get("input[name='userName']").type('abc@gmail.com')
        cy.get("input[name='password']").type('May@2023')
        cy.get("input[name='submit']").click()
        cy.title().should('eq', 'Login: Mercury Tours')
        cy.xpath("//h3[normalize-space()='Login Successfully']").should('have.contain', 'Login Successfully')

    })


})