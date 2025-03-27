/// <reference types="cypress"/>
import LoginPage from '../PageObject/LoginPage.cy'

describe('Login flow', ()=>{       
    it('Login validations', ()=>{
        cy.fixture('example.json').then(function(data){
            this.data = data

            const login = new LoginPage()
            cy.visit(Cypress.env('url'))
            login.getEmail().type(this.data.userEmail)
            login.getPassword().type(this.data.password)
            login.getLoginClick().click()

        })

    })
})