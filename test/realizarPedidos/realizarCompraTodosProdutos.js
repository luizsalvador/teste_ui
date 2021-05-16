Feature('@COMPAR - @EXECUTARTODOS');
/*
Objetivo do testes: Realizar compra de todos os produtos disponíveis na lista e validar o o total da compra. 
*/
const XPATH_CHECKOUT_BUTTON = '//*[@id="checkout"]';

Scenario('Realizar compra de todos os produtos disponíveis', (I, pedidosSite) => {

    I.realizarLogin('lstandard_user', 'secret_sauce');
    I.waitForText('PRODUCTS', 20);
    I.see('PRODUCTS');
    pedidosSite.adicionarProdutoDiretoLitas('Sauce Labs Backpack');
    pedidosSite.adicionarProdutoDiretoLitas('Sauce Labs Bike Light');
    pedidosSite.adicionarProdutoDiretoLitas('Sauce Labs Bolt T-Shirt');
    pedidosSite.adicionarProdutoDiretoLitas('Sauce Labs Fleece Jacket');
    pedidosSite.adicionarProdutoDiretoLitas('Sauce Labs Onesie');
    pedidosSite.adicionarProdutoDiretoLitas('Test.allTheThings() T-Shirt (Red)');
    pedidosSite.acessarCarrinhoCompras('6');
    I.click(XPATH_CHECKOUT_BUTTON);
    pedidosSite.finalizarCompra(informacao);
});

informacao = {
    primeiroNome: 'Luiz',
    ultomoNome: 'da Silva',
    codigoPostal: '89131-000',
    itemTotal: '$129.94',
    Tax: '$10.40',
    Total: '$140.34'
}