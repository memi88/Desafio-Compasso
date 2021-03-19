/* global Given, Then, When */
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
const homePage = new HomePage
const cartPage = new CartPage


        //Scenario: Adicionar Produto ao carrinho via busca
        Given ("Usuario esteja na Home Page", () => {
            homePage.acessarSite()
        })
        
        When ("Usuario preenche o campo de busca com {string}", (product) => {
            homePage.inserirBusca(product)
        })

        And ("Clica no botao de busca", () => {
            homePage.clickBusca()
        })

        And ("Clica no botao Add to Cart", () => {
            homePage.clickAddCart()
        })

        Then ("Sistema deve exibir produto adicionado ao carrinho", () => {
            cartPage.validarCarrinho()
        })


