Feature('@COMPAR - @EXECUTARTODOS');
/*
Objetivo do testes: Realizar a compra de dois produtos disponíveis na lista. acessando individualmente cada produto e adicionado ao carrinho.
*/
const XPATH_CHECKOUT_BUTTON = '//*[@id="checkout"]';
const XPATH_CONTINUESHOPPING_BUTTON = '//*[@id="continue-shopping"]';

Scenario('Realizar a compra individualmente de dois os produtos disponíveis na lista', (I, pedidosSite) => {

    I.realizarLogin('lstandard_user', 'secret_sauce');
    I.waitForText('PRODUCTS', 20);
    I.see('PRODUCTS');
    pedidosSite.adicionarProdutoIndividual('Sauce Labs Fleece Jacket');
    pedidosSite.acessarCarrinhoCompras('1');
    I.click(XPATH_CONTINUESHOPPING_BUTTON);
    pedidosSite.adicionarProdutoIndividual('Sauce Labs Onesie');
    pedidosSite.adicionarProdutoIndividual('Sauce Labs Bike Light', 'menu');
    pedidosSite.acessarCarrinhoCompras('3');
    pedidosSite.excluirProdutoCarrinho("Sauce Labs Fleece Jacket");
    I.click(XPATH_CHECKOUT_BUTTON);
    pedidosSite.finalizarCompra(informacao);
    pedidosSite.retornarHome();
    pedidosSite.acessarCarrinhoCompras('');
    I.dontSee('Sauce Labs Onesie');
    I.dontSee('Sauce Labs Bike Light');
});

informacao = {
    primeiroNome: 'Ricardo',
    ultomoNome: 'de Ramos',
    codigoPostal: '89133-000',
    itemTotal: '$17.98',
    Tax: '$1.44',
    Total: '$19.42'
}