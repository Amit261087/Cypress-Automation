clear
describe('Book Ticket', function(){

    it('Book Ticket Sign Up', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.title().should('eq', 'Welcome: Mercury Tours')
        cy.xpath("//a[normalize-space()='REGISTER']").should('be.visible')
        .click()
        cy.get("input[name='firstName']").type('Amit')
        cy.get("input[name='lastName']").type('Sharma')
        cy.get("input[name='phone']").type('8600000000')
        cy.get("#userName").type('abc@gmail.com')
        cy.get("input[name='address1']").type("Narayan Peth")
        cy.get("input[name='city']").type('Pune')
        cy.get("input[name='state']").type('Maharashtra')
        cy.get("input[name='postalCode']").type('411030')
        cy.get("select[name='country']").select('INDIA')
        cy.get("select[name='country']").should('have.value', 'INDIA')
        cy.get('#email').type('abc@gmail.com')
        cy.get("input[name='password']").type('May@2023')
        cy.get("input[name='confirmPassword']").type('May@2023')
        cy.get("input[name='submit']").click()
        cy.xpath("//b[normalize-space()='Dear Amit Sharma,']").should('have.contain', 'Amit')
        cy.xpath("//b[normalize-space()='Note: Your user name is abc@gmail.com.']").should('have.contain', 'abc@gmail.com')
        cy.title().should('eq', 'Register: Mercury Tours')
    })

    

})