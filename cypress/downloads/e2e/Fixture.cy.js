describe('Fixtures', function(){
    /*it('Fixture Demo Test', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.xpath("//span[normalize-space()='PIM']").click()
            //cy.wait(5000)
            cy.xpath("//h6[normalize-space()='PIM']").should('have.text', data.expected)
        })
    })*/
/*
    let userdata
    before(()=>{
        cy.fixture("OrangeHRM").then((data)=>{
            userdata=data
        })

    })

    it('Fixtures thru hook', function(){
        
        cy.visit(userdata.URL)
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.xpath("//span[normalize-space()='PIM']").click()
        cy.xpath("//h6[normalize-space()='PIM']").should('have.text', userdata.expected)
    })*/

    it.only("multiple data set from fixture", function(){
        cy.fixture('orangehrm1').then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    //cy.get("button[type='submit']").click()
                    cy.xpath("//span[normalize-space()='PIM']").click()
                    cy.xpath("//h6[normalize-space()='PIM']").should('have.text', userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else
                {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected)
                }                
            })
        })
    })
})