import Login from "../POM/Login"
import Admin from "../POM/Admin"

describe('Search User On Admin Page', function(){

    it('Search By Username', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            const ap=new Admin()
            ap.adminLink()
            cy.get('.oxd-label').should('be.visible')
            cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type("Admin")
            cy.get("button[type='submit']").click({force:true})
            cy.wait(5000)
            cy.get('.orangehrm-horizontal-padding > .oxd-text').then((e)=>{
                const mytext = e.text()
                if (mytext.includes("No Records Found"))
                {
                    cy.log("No Records Found")
                }
                else
                {
                    const totalrecords=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf(")"))
                    cy.log("Total Number of Records are: "+totalrecords)
                }
            })
        })
    })
    
    it('Search By User Role', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            const ap=new Admin()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ap.adminLink()
            cy.get("div[class='oxd-table-filter-area'] div:nth-child(2) div:nth-child(1) div:nth-child(1) label:nth-child(1)").should('be.visible')
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)").click()
            .contains("Admin").click()
            cy.get("button[type='submit']").click({force:true})
            cy.wait(5000)
            cy.get('.orangehrm-horizontal-padding > .oxd-text').then((e)=>{
                const mytext = e.text()
                if (mytext.includes("No Records Found"))
                {
                    cy.log("No Records Found")
                }
                else
                {
                    const totalrecords=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf(")"))
                    cy.log("Total Number of Records are: "+totalrecords)
                }
            })
        })        
    })

    it('Search By Employee Name', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            const ap=new Admin()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ap.adminLink()
            cy.get(".oxd-autocomplete-text-input.oxd-autocomplete-text-input--active").should('be.visible')
            cy.get("input[placeholder='Type for hints...']").type("Odis")
            cy.wait(2000)
            cy.contains("Odis Adalwin").click()
            cy.wait(5000)
            cy.get("button[type='submit']").click({force:true})
            cy.get('.orangehrm-horizontal-padding > .oxd-text').then((e)=>{
                const mytext = e.text()
                if (mytext.includes("No Records Found"))
                {
                    cy.log("No Records Found")
                }
                else
                {
                    const totalrecords=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf(")"))
                    cy.log("Total Number of Records are: "+totalrecords)
                }
            })
        })
    })

    it('Search By Status', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            const ap=new Admin()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ap.adminLink()
            cy.get(':nth-child(4) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible')
            cy.wait(2000)
            cy.get('div:nth-child(4) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)').click({force:true})
            cy.contains("Enabled").click({force:true})
            cy.get("button[type='submit']").click({force:true})
            cy.wait(5000)
            cy.get('.orangehrm-horizontal-padding > .oxd-text').then((e)=>{
                const mytext = e.text()
                if (mytext.includes("No Records Found"))
                {
                    cy.log("No Records Found")
                }
                else
                {
                    const totalrecords=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf(")"))
                    cy.log("Total Number of Records are: "+totalrecords)
                }
            })
        })        
    })
})
