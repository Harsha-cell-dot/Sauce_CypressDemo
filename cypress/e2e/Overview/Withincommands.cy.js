describe('Within Commands demo', ()=>{
    it('Within Commands', ()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#open-window-example-div').within(()=>{
            cy.get('button')
        }).should('have.id', 'open-window-example-div')
    })
})