// Este archivo contiene funciones utiles que se pueden reutilizar en diferentes archivos de prueba.

//Retorna un correo electronico aleatorio
function generateRandomEmail() {
  //Math.random() retorna un numero entre 0 y 1
  //toString(36) convierte un numero a un texto en base 36 (0-9 y a-z)
  const firstName = Math.random().toString(36).substring(2, 9);
  const lastName = Math.random().toString(36).substring(2, 9);
  const domain = "@example.com";
  return `${firstName}.${lastName}${domain}`;
}

//Retorna un numero aleatorio entre 0 y 1000000
function generateRandomNumber() {
  //Math.random() retorna un numero entre 0 y 1
  const randomNumber = Math.random();
  //Math.floor() redondea hacia abajo un numero decimal
  const roundedNumber = Math.floor(randomNumber * 1000000);

  return roundedNumber;
}

//Expotamos un objeto que contiene las funciones para poder llamarlos desde otros archivos
module.exports = {
  generateRandomEmail: generateRandomEmail,
  generateRandomNumber: generateRandomNumber,
};

//Esta es otra forma tambien que se usa en otros lenguajes pero al final dan la misma funcionalidad
// Se crea una clase como hicimos con POM de LoginPage, y se usan sus metodos,
//si tiene metodos static se usa asi: ejemplo: Utils.generateRandomEmail()
//si no tiene metodos static se crea una instancia de la clase y se usa asi: ejemplo: var x = new Utils(); y luego x.generateRandomEmail()

class Utils {
  static generateRandomEmail() {
    //Math.random() retorna un numero entre 0 y 1
    //toString(36) convierte un numero a un texto en base 36 (0-9 y a-z)
    const firstName = Math.random().toString(36).substring(2, 9);
    const lastName = Math.random().toString(36).substring(2, 9);
    const domain = "@example.com";
    return `${firstName}.${lastName}${domain}`;
  }

  //Retorna un numero aleatorio entre 0 y 1000000
  static generateRandomNumber() {
    //Math.random() retorna un numero entre 0 y 1
    const randomNumber = Math.random();
    //Math.floor() redondea hacia abajo un numero decimal
    const roundedNumber = Math.floor(randomNumber * 1000000);

    return roundedNumber;
  }
}

//Se exporta la clase Utils
// module.exports = Utils;
export default Utils;
