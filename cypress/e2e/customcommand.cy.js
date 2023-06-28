describe('Customer Command', function(){
    it('Handling Links', function(){
        cy.visit('https://demo.nopcommerce.com/')
        //Direct Approach
        //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        
        //Using Customer COmmand
        cy.clicklink("Build your own computer")
        cy.get('h1').should('have.text', 'Build your own computer')

    })

    it('Over Writing existing command', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.clicklink("BUILD YOUR OWN COMPuter")
        cy.get('h1').should('have.text', 'Build your own computer')
    })

    it.only('Login Command', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.clicklink('Log in')
        cy.loginapp("test261087@gmail.com", "Test123")
        cy.get('.ico-account').should('have.text', 'My account')
    })
})