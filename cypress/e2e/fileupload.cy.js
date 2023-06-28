import 'cypress-file-upload'

describe('File Upload', function(){
    it('Single File Upload', function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test.docx', fileName:'myfile.docx'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('h3').should('have.text', 'File Uploaded!')
        cy.get('#uploaded-files').should('have.contain','myfile.docx')
    })

    it('file upload - Drag & Drop', function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.docx', {subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.docx')
    })

    it('multiple file upload', function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test.docx', 'test1.docx'])
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected')

    })

    it.only('File Upload - Shadow Dom', function(){
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('test.docx')
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test.docx')

    })


})