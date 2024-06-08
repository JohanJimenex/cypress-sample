# Proyecto con ejemplos basicos con Cypress
Johan Johan Johan!

Este proyecto utiliza [Cypress](https://www.cypress.io/), una herramienta para automatizar pruebas, para probar una aplicación web.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

- `cypress/` - Contiene todos los archivos relacionados con las pruebas de Cypress.
  - `e2e/` - Contiene los casos de prueba.
    - `Test Cases/` - Contiene los casos de prueba avanzados y básicos.
  - `fixtures/` - Contiene los archivos de datos de prueba.
  - `screenshots/` - Contiene las capturas de pantalla de las pruebas.
  - `support/` - Contiene archivos de soporte para las pruebas, incluyendo comandos personalizados y funciones de utilidad.
- `.gitignore` - Especifica los archivos y directorios que Git debe ignorar.
- `cypress.config.js` - Configuración de Cypress.
- `package.json` - Contiene las dependencias del proyecto y los scripts de npm.
- `README.md` - Este archivo.

## Funciones de Utilidad

El archivo `cypress/support/utils.js` contiene funciones de ejemplos de utilidad que se pueden reutilizar en diferentes archivos de prueba. Por ejemplo, `generateRandomEmail` y `generateRandomNumber`.

## Casos de Prueba

Los casos de prueba se encuentran en el directorio `cypress/e2e/Test Cases/`. Hay casos de prueba avanzados y básicos.

## Cómo Ejecutar las Pruebas

Para ejecutar las pruebas, primero instale las dependencias con `npm install`. Luego, puede ejecutar las pruebas con alguno de los sigueintes comando: <br>

`npx cypress run`: si tienes cypress instalado de manera local, <br>
`cypress run`: si tienes cypress instalado de manera global, <br>
`--headed` Puedes agregar este comando para ejecutar las pruebas en modo visual, <br>
`npx cypress open` o `cypress open`: para abrir el dashboard de cypress y seleccionar las pruebas a ejecutar. <br>
`npm run start`. Este comando llama al comando `npx cypress open` <br>
