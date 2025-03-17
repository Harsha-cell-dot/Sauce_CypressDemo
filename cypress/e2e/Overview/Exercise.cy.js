describe('Exercise Demo', ()=>{
    it('Adding Product to cart', ()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('#login_credentials br:nth-child(3)').next().invoke('text').then((text) => {
        cy.log(text); 
        });
            cy.get(".login_password").invoke('text').then((password) => {
             const credentials = { text, password }
            cy.visit("https://www.saucedemo.com/")
            Object.entries(credentials).forEach(([key, value]) => {
                 if (key === 'text') {
                  cy.get("#user-name").type(value);
                } else if (key === 'password') {
                  cy.get("#password").type('secret_sauce');
                  cy.log("want to check action flow");
                }
              });

            })
      })
        // cy.get("#login-button").click()
        // cy.get("select[class='product_sort_container']").select("Price (low to high)")
        // cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        // cy.get("#shopping_cart_container > a").click()
        // const data = 'Sauce Labs Bolt T-Shirt'
        // cy.get('[data-test="inventory-item-name"]').should('contain.text', data)
        // cy.contains('button', 'Remove').click()
        // const shop = 'shopping_cart_link'
        // cy.get("#shopping_cart_container > a").should('have.class', shop)


    })