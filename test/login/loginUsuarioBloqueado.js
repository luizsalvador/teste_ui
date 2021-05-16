Feature('@LOGIN - @EXECUTARTODOS');
/*
Objetivo do testes: Realizar logon com usuário bloqueado, e validar a mensagem apresentada. 
*/

const TEXTO_MENSAGEM_TEXT = "Epic sadface: Sorry, this user has been locked out.";

Scenario('Realizar logon com usuário bloqueado', (I) => {

    I.realizarLogin("locked_out_user", "secret_sauce");
    I.waitForText(TEXTO_MENSAGEM_TEXT, 10);
    I.see(TEXTO_MENSAGEM_TEXT);
});
