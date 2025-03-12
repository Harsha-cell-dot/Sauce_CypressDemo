describe('Chain commands demo', ()=>{
    it('Chain commands learning', ()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('button').eq(1).should('contain', 'Open Window')
        cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')
    })
})