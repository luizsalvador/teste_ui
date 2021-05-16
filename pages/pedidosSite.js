let = I
const XPATH_PRIMEIRONOME_INPUT = '//*[@id="first-name"]';
const XPATH_ULTIMONOME_INPUT = '//*[@id="last-name"]';
const XPATH_CODIGOPOSTAL_INPUT = '//*[@id="postal-code"]';
const XPATH_MENU_BUTTON = '//*[@id="react-burger-menu-btn"]';
const XPATH_ALLITENS_BUTTON = '//*[@id="inventory_sidebar_link"]';
const XPATH_ADDTOCART_BUTTON = '//button[text()="Add to cart"]';
const XPATH_BLACKTOPRODUTS_BUTTON = '//*[@id="back-to-products"]';
const XPATH_FINISH_BUTTON = '//*[@id="finish"]';
const XPATH_CONTINUE_BUTTON = '//*[@id="continue"]';
const XPATH_BACKHOME_BUTTON = '//*[@id="back-to-products"]';
const XPATH_ACESSARCARRINHO_A = '//*[@id="shopping_cart_container"]/a';

module.exports = {
    _init() {
        I = require = ("../steps_file.js")
    },

    /**
     * Função que seleciona um produto e realiza a compra pelo detalhamento do porduto, e retornando para a tela "PRODUCTS".
     * @param {String} nomeProduto nome do produto a ser adicionado.
     * @param {String} acao qual o tipo de retorno para a tela "PRODUCTS": via "Menu > All Items" ou pelo botão "BACK TO PRODUCTS".
     */
    adicionarProdutoIndividual(nomeProduto, acao) {
        I.click(`//div[text()="${nomeProduto}"]`);
        I.waitForText(nomeProduto, 20);
        I.see(nomeProduto);
        I.click(XPATH_ADDTOCART_BUTTON);
        I.waitForText('Remove', 20);
        I.see('Remove');
        if (acao === 'menu') {
            I.click(XPATH_MENU_BUTTON);
            I.waitForText('All Items', 20);
            I.click(XPATH_ALLITENS_BUTTON);
        } else {
            I.click(XPATH_BLACKTOPRODUTS_BUTTON);
        }
        I.waitForText('PRODUCTS', 20);
        I.see('PRODUCTS');
    },

    /**
     * Função que seleciona um produto para compra, na tela "PRODUCTS".
     * @param {String} nomeProduto nome do produto a ser adicionado.
     */
    adicionarProdutoDiretoLitas(nomeProduto) {
        I.click(`//div/div/div[2]/div/a/div[text()="${nomeProduto}"]/ancestor::div[contains(@class, 'inventory_item')]/div[2]/div[2]/button`);
    },

    /**
     * Função que acessa o carrinho de compras e valida a quantidade de itens selecionados.
     * @param {String} quantProdutos quantidade de itens que foram selecionados na compra. 
     */
    acessarCarrinhoCompras(quantProdutos) {
        I.seeElement(XPATH_ACESSARCARRINHO_A + '/span', quantProdutos);
        I.click(XPATH_ACESSARCARRINHO_A);
        I.waitForText('YOUR CART', 20);
        I.see('YOUR CART');
    },

    /**
    * Função que exclui um produto do carrinho de compras, na tela "YOUR CART".
    * @param {String} nomeProduto nome do produto a ser excluído.  
    */
    excluirProdutoCarrinho(nomeProduto) {
        I.click(`//div[text()="${nomeProduto}"]/ancestor::div[contains(@class, "cart_item")]//div[2]/div/button`);
        I.see('YOUR CART');
        I.dontSee(nomeProduto);
    },

    /**
     * Função que finaliza o pedido de compras: 
               - preenchendo as informações do comprador;
               - valida os valores da compra.
     * @param {Object} dados 
              informacao {
                            primeiroNome: 'Luiz',
                            ultomoNome: 'da Silva',
                            codigoPostal: '89131-000',
                            itemTotal: '$129.94',
                            Tax: '$10.40',
                            Total: '$140.34'
                        }
     */
    finalizarCompra(dados) {
        I.waitForText('CHECKOUT: YOUR INFORMATION', 20);
        I.see('CHECKOUT: YOUR INFORMATION');

        //Informar os dados do comprador
        I.waitForElement(XPATH_PRIMEIRONOME_INPUT, 10);
        I.fillField(XPATH_PRIMEIRONOME_INPUT, dados.primeiroNome);
        I.fillField(XPATH_ULTIMONOME_INPUT, dados.ultomoNome);
        I.fillField(XPATH_CODIGOPOSTAL_INPUT, dados.codigoPostal);
        I.click(XPATH_CONTINUE_BUTTON);

        //Verificar o total da compra
        I.waitForText('CHECKOUT: OVERVIEW', 20);
        I.see('CHECKOUT: OVERVIEW');
        I.see('Item total:');
        I.see(dados.itemTotal);
        I.see('Tax:');
        I.see(dados.Tax);
        I.see('Total:');
        I.see(dados.Total);

        //Finalizar a compra 
        I.click(XPATH_FINISH_BUTTON);
        I.waitForText('CHECKOUT: OVERVIEW', 20);
        I.see('Back Home');
    },

    /**
    * Função que retorna a pagina principal, apos finalizar o pedido.
    */
    retornarHome() {
        I.waitForText('Back Home', 20);
        I.click(XPATH_BACKHOME_BUTTON);
        I.waitForText('PRODUCTS', 20);
        I.see('PRODUCTS');
    }

}