//Before
//After
//Before Each
//After Each
describe('Hook & Tag', function(){
    before(()=>{
        cy.log("** Lanuch App **")
    })
    
    after(()=>{
        cy.log("** Close App **")
    })
    beforeEach(()=>{
        cy.log("** Login **")
    })
    afterEach(()=>{
        cy.log("** Logout **")
    })
    it('Search', function(){
        cy.log("** Search **")

    })
    it('Advance Search', function(){
        cy.log("** Advance Search **")

    })
    it('Listing Products', function(){
        cy.log("** List Products **")

    })
})