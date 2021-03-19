Feature: Adicionar Produto ao carrinho

Como Usuario, desejo adicionar um produto ao carrinho


        Scenario: Adicionar Produto ao carrinho via busca
        Given Usuario esteja na Home Page
        When Usuario preenche o campo de busca com "Faded Short Sleeve"
        And Clica no botao de busca
        And Clica no botao Add to Cart
        Then Sistema deve exibir produto adicionado ao carrinho