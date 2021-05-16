// in this file you can append custom step methods to 'I' object

const URL_BASEURL_TEXT = 'https://www.saucedemo.com';
const XPATH_CAMPOUSUARIO_INPUT = '//*[@id="user-name"]';
const XPATH_SENHAUSUARIO_INPUT = '//*[@id="password"]';
const XPATH_LOGIN_BUTTON = '//*[@id="login-button"]';

module.exports = function() {
  return actor({
    
    realizarLogin(nomeUsuario, senhaUsuario) {
      I.amOnPage(URL_BASEURL_TEXT);
      I.waitForText('Accepted usernames are:', 25);
      I.see('Accepted usernames are:');
      I.waitForElement(XPATH_CAMPOUSUARIO_INPUT, 10);
      I.fillField(XPATH_CAMPOUSUARIO_INPUT, nomeUsuario);
      I.fillField(XPATH_SENHAUSUARIO_INPUT, senhaUsuario);
      I.click(XPATH_LOGIN_BUTTON);
  }

  });
}
