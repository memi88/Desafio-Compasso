/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
//const url = Cypress.env('baseUrl')

class HomePage{

    acessarSite(){
        cy.visit(Cypress.env('baseUrl'))
    }

    inserirBusca(product){
        cy.get(homeElements.inputBusca()).type(product)
    }

    clickBusca(){
        cy.get(homeElements.btnBusca()).click()
    }

    clickAddCart(){
        //invoke('show')
        cy.get(homeElements.primeiroProduto()).contains('In stock').first().trigger('mouseover')
        cy.get(homeElements.btnAddCart()).should('be.visible').click()
    }



}

export default HomePage;


