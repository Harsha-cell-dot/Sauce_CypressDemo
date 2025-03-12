describe('Exercise Demo', () => {
  it('Adding Product to cart', () => {
    cy.visit("https://www.saucedemo.com/")
    let usernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"]
    cy.get('#login_credentials').then(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        console.log(text)
      })
    }).then(() => {
      //console.log(usernames);
      let selectedUsername = usernames.slice(0, 5)[0];
      console.log("Selected username: ", selectedUsername);
      cy.get('#user-name').type(selectedUsername);
      cy.get('#password').type('secret_sauce');
      cy.get("#login-button").click()
      cy.get("select[class='product_sort_container']").select("Price (low to high)")
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
      cy.get("#shopping_cart_container > a").click()
      const data = 'Sauce Labs Bolt T-Shirt'
      cy.get('[data-test="inventory-item-name"]').should('contain.text', data)
      cy.contains('button', 'Remove').click()
      const shop = 'shopping_cart_link'
      cy.get("#shopping_cart_container > a").should('have.class', shop)

    })
  })
})