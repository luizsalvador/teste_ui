# teste_ui
Projeto de teste que valida o processo de compra em uma loja virtual utilizando como ferramenta o codeceptJS em javaScript.

Para o desenvolvimento do projeto de teste de UI, foi utilizado a ferramenta codeceptJS com o  helpers com Puppeteer - https://codecept.io/helpers/Puppeteer/#puppeteer.


# Pré-requisitos:
Visual Studio - https://code.visualstudio.com/download

Nodejs  - https://nodejs.org/en/download/

JDK do java 8 - https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html


Executar comando: 

    npm install
 
Para executar o teste: 

    npx codeceptjs run testeUi
 
 
# Estrutura do projeto

![image](https://user-images.githubusercontent.com/55900972/118415831-0b362180-b683-11eb-8d51-a4ebc4535780.png)

**codecept-conf** - onde ficam as configurações com: qual o browse deve ser iniciado, qual o tempo padrão que deve esperando carregar os elementos da tela,  e quais são as dependências com as pages (module.exports).

**pages** - onde ficam as funções comuns ao módulo ou submódulo.

**test** - onde ficam localizados os teste de UI

**steps_file.js** - onde ficam as funções comuns para toda a aplicação, sendo utilizado até por mais de um aplicação, desde que esteja dentro do repositório.

**package** - onde ficam as dependências e suas  versões  assim como os scripts para a chamada de determinados  testes.

# test

Os testes estão divididos em duas pastas:

**login** > loginUsuarioBloqueado: realizar o login e valida a mensagem de usuário bloqueado.

**realizarPedidos** > realizarCompraDoisProdutos:

1 - Realizar a compra individualmente dos produtos;

2 - Retornar para a lista de produtos alterando o caminho pelo "Menu > All Items" ou pelo botão "BACK TO PRODUCTS";

3 - Excluir um produto, dentro do carrinho de compras;

4 - Informar os dados do comprador;

5 - Validar os valores da compra sem o produto excluído;

6 - Finalizar a compra;

7 - Retornar a HOME;

8 - Validar se o carrinho de compras está vazio.



**realizarPedidos** > realizarCompraTodosProdutos: 

1 - Realizar a compra coletiva de todos os produtos pela HOME;

2 - Validar a quantidade de  itens do carrinho de compras

3 - Informar os dados do comprador

4 - Validar os valores da compra

5-  Finalizar a compra;

*HOME - Tela inicial da aplicação, onde está a lista com todos os produtos.




