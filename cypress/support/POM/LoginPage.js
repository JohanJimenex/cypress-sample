class LoginPage {
  #inputUsername = "#user-name";
  #inputPassword = "#password";
  #buttonSubmit = "#login-button";

  Login(username, password) {
    //Se debe llamar el nombre d ela variable privada con this y con el simbolo # que incluye el nombre de la variable privada
    cy.get(this.#inputUsername).type(username);
    cy.get(this.#inputPassword).type(password);
    this.Submit();
  }

  Submit() {
    cy.get(this.#buttonSubmit).click();
  }
}

export default LoginPage;
