describe('Test Case Scenarios', ()=>{
    it('first test case', ()=>{
      cy.visit('https://rahulshettyacademy.com/client/')
      cy.get('#userEmail').type('harshith54@gmail.com')
      //cy.xpath('//input[@id="userEmail"]').type('harshith54@gmail.com')
      cy.get('#userPassword').type('Virat@17')
      cy.get('#login').click()
      //cy.get(':nth-child(5) > .btn').click()

    })

})