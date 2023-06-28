// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
       it('Launch Orange HRM application', function (){
          // test step for URL launching
          cy.visit("https://opensource-demo.orangehrmlive.com/")
          cy.title().should('eq', 'OrangeHRM')
       })

       it('Login to Orange HRM application', function(){
         cy.visit("https://opensource-demo.orangehrmlive.com/")
         cy.get("[name='username']").type("Admin")
         cy.get("[name='password']").type("admin123")
         cy.get("[type='submit']").click()
       })

       it('Logout from  Orange HRM application', function(){
         cy.visit("https://opensource-demo.orangehrmlive.com/")
         cy.get("[name='username']").type("Admin")
         cy.get("[name='password']").type("admin123")
         cy.get("[type='submit']").click()
         cy.get('.oxd-userdropdown-name').click()
         cy.xpath('//a[normalize-space()="Logout"]').click()
       })



              
    })