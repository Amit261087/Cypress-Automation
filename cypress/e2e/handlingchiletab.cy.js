describe('Handling Chile Tab', function(){
    it('Approach 1', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr' , 'target').click()
        cy.title().should('have.contain', 'New Window')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
        cy.title().should('have.contain', 'The Internet')
    })

    it('Approach 2', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })
        cy.title().should('have.contain', 'New Window')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
        cy.title().should('have.contain', 'The Internet')
    })
})