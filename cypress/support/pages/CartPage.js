/// <reference types="Cypress" />

import CartElements from '../elements/CartElements'
const cartElements = new CartElements


class CartPage{

    validarCarrinho(){
        cy.get(cartElements.layerCart()).should('be.visible')
        cy.get(cartElements.layerCart()).should('contain.text', 'Product successfully added to your shopping cart')
        cy.get(cartElements.NomeProduto()).should('contain.text', 'Faded Short Sleeve T-shirts')
        cy.get(cartElements.AtributoProduto()).should('contain.text', 'Orange, S')
        cy.get(cartElements.QuantidadeProduto()).should('contain.text', '1')
        cy.get(cartElements.PrecoProduto()).should('contain.text', '$16.51')
        cy.get(cartElements.btnContinueShopping()).should('be.visible')
        cy.get(cartElements.btnProceedCheckout()).should('be.visible')
        cy.get(cartElements.btnFecharLayer()).should('be.visible')


    }

    


}

export default CartPage;