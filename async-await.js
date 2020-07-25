/**+-(6)-ASYNC-AWAIT( https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona ):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose 
 * a la Base de Datos en MongoDB como Nuestro Product Document Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos 
 * en el Archivo "index.js"):_.*/

require('./connection.js');

const Product = require('./models/Product.js');

async function main() {
    const Keyboard = new Product({
        name: 'Keyboard',
        description: 'Coursair K68 RGB Gaming Keyboard',
        price: 150.35
    })
    
    const keyboardSaved = await Keyboard.save();
    console.log(keyboardSaved);
    return keyboardSaved;
}

main() /**+-Para Ejecutar el Código que escribimos Anteriormente.*/
    .then(keyboardSaved => console.log(keyboardSaved)) /**+-Usando Promises de JS, en Caso de Salir Todo Exitosamente, Mostrar en Consola el Guardado, en este Caso "keyboardSaved".*/
    .catch(err => console.log(err))/**+-Usando Promises de JS, en Caso haber un Error, Mostrar en Consola el Error.*/
    /**+-Aprender más Sobre Promises de JS en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise .*/


/**+-Esto que acabamos de escribir aquí Cumple La Misma Función que el Código que usamos en el Archivo "index.js" PERO sin usar Callbacks( https://developer.mozilla.org/es/docs/Glossary/Callback_function )
que a la hora de Desarrollar Proyectos más Grandes son más Tediosas de Escribir, Leer y Usar.*/

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose), ir a la Carpeta "crud" al Archivo 
 * "find.js" para seguir Aprendiendo.*/