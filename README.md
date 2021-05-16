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

codecept-conf - onde ficam as configurações de qual browse deve ser iniciado, qual o tempo padrão que deve ficar esperando carregar os elementos da tela,  e quais são as dependências com as pages (module.exports).

pages - onde ficam as funções comuns ao módulo ou submódulo.

test - onde ficam localizados os teste de UI

steps_file.js - onde ficam as funções comuns para toda a aplicação, sendo utilizado até por mais de um aplicação, desde que esteja dentro de repositório.

package - onde ficam as dependências e suas  versões  assim como os scripts para a chamada de determinados  testes.


