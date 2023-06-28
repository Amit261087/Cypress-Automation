import Login from "../POM/Login"

describe('Add Employee', function(){
    it('Add Employess', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL);
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
            cy.wait(2000)
            /*cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").each(($el, index, $list)=>{
                const text = $el.text();
                if(text.includes('PIM')){
                    cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").eq(index).click();
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', "PIM") 
                }
            cy.wait(2000)
            cy.get("a[class='oxd-topbar-body-nav-tab-item']").each(($el, index, $list)=>{
                const text1 = $el.text()
                if(text1.includes('Add Employee')){
                    cy.get("a[class='oxd-topbar-body-nav-tab-item']").eq(index).click()

                }
            })
            })*/

            cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
                .contains('PIM')
                .click()
                .should('have.text', 'PIM');

            cy.get("a[class='oxd-topbar-body-nav-tab-item']")
                .contains('Add Employee')
                .click();
            cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Add Employee');
            cy.wait(2000);
            cy.get("input[class='oxd-input oxd-input--active orangehrm-firstname']").type("Amit");
            cy.get("input[class='oxd-input oxd-input--active orangehrm-middlename']").type("Kumar");
            cy.get("input[class='oxd-input oxd-input--active orangehrm-lastname']").type("Sharma");
            cy.get("button[type='submit']").click();
            cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', "Amit Sharma")

            cy.wait(2000)

            cy.get("a[class='oxd-topbar-body-nav-tab-item']")
                .contains('Employee List')
                .click();
            cy.wait(2000)

            cy.get("div[class='oxd-table-cell oxd-padding-cell']").each(($el, index, $list)=>{
                const text=$el.text()
                if(text.includes("Amit Kumar")){
                    cy.log("Employee is added successfully")
                }

            })
        })

    })
})