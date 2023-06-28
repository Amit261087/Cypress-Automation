import Login from "../POM/Login";

describe('Delete Employee', function(){
    it('Delete Existing Employee', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL);
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
            cy.wait(2000);

            cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
                .contains('PIM')
                .click();

            cy.get("a[class='oxd-topbar-body-nav-tab-item']")
                .contains('Employee List')
                .click();

            cy.wait(2000)

            cy.get("div[class='oxd-table-cell oxd-padding-cell']").each(($el, index, $list)=>{
                const text=$el.text()
                if(text.includes("Amit Kumar")){
                    const $row = $el.closest("div[class='oxd-table-row oxd-table-row--with-border oxd-table-row--clickable']");
                    const rowData = $row.find(".oxd-table-cell").map((_, cell) => Cypress.$(cell).text());
                    cy.log(rowData.get().join(' | '));
                    $row.find("i[class='oxd-icon bi-trash']").trigger({ force: true });
                    cy.wait(1000);
                    cy.get('.oxd-button--label-danger').click();
                    cy.wait(3000);
          
          // Break the loop after finding the first occurrence of "Amit"
                    return false;
                }
            });

        })
    })
})