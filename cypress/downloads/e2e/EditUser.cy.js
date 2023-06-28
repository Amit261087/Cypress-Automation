import Login from "../POM/Login";
import Admin from "../POM/Admin";

describe('Edit Usser', function(){
    it('Edit User', function(){
        cy.fixture('OrangeHRM').then((data) => {
            cy.visit(data.URL)
            const ln = new Login()
            const ap = new Admin()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ap.adminLink()
            cy.wait(2000)
            cy.get(".oxd-table-cell.oxd-padding-cell:nth-child(2)").each(($el, index, $list) => {
                const cellText = $el.text();
                if (cellText.includes("Sa")) {
                    //const $row = $el.closest(".oxd-table-row.oxd-table-row--with-border");
                    // Get the text content of all cells within the row
                    //const rowData = $row.find(".oxd-table-cell").map((_, cell) => Cypress.$(cell).text());
                    
                    // Print the entire row data
                    //cy.log(rowData.get().join(' | '));

                    cy.get("i.oxd-icon.bi-pencil-fill")
                        .eq(index)
                        .should('be.visible')
                        .click({force:true});

                        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
                        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
                        cy.get('.oxd-button--secondary').click();
                        cy.wait(5000)

                        cy.get(".oxd-table-cell.oxd-padding-cell:nth-child(2)").eq(index).next()
                            .should('have.text', "Admin");
                }
            })  
        })
    })
})