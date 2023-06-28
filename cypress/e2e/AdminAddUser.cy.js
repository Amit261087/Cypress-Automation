import Login from "../POM/Login";
import Admin from "../POM/Admin";


describe('Add New User', function() {
    it('Add User', function() {
      cy.fixture('OrangeHRM').then((data) => {
        cy.visit(data.URL)
        const ln = new Login()
        const ap = new Admin()
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
        ap.adminLink()
        ap.verifyAddButton()
        ap.clickAddButton()
        ap.verifyAddUserPage()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',{force:true}).click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('have.text', "Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', {force:true}).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get('.oxd-autocomplete-text-input > input').type("Jai")
        cy.wait(2000)
        cy.get('.oxd-autocomplete-option > span').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("SuperAdmin")
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jun@2023")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jun@2023")
        cy.get('.oxd-button--secondary').click()
        cy.wait(10000)
        cy.get(".oxd-table-cell.oxd-padding-cell:nth-child(2)").each(($el, index, $list) => {
          const cellText = $el.text();
          if (cellText.includes("SuperAdmin")) {
            // Find the parent row of the matching cell
            const $row = $el.closest(".oxd-table-row.oxd-table-row--with-border");
            
            // Get the text content of all cells within the row
            const rowData = $row.find(".oxd-table-cell").map((_, cell) => Cypress.$(cell).text());
            cy.log(rowData)
            // Print the entire row data
            cy.log(rowData.get().join(' | '));
          }
        })
      })
    })
  })
  