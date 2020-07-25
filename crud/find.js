/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro Product Document 
 * Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos en el Archivo "index.js"):_.*/

require('../connection');

const Product = require('../models/Product.js');

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose). A Continuación vamos a Ejecutar 
 * en Mongoose en Método de MongoDB "find()" con la Collection "products" que nos va a Mostrar TODOS los Documents de esta Collection.*/

async function main() {
    const products = await Product.find();/**+-Busca Todos los Document Tipo Schema "Product" que tenga en mi Base de Datos. También usando la Sintaxis "Product.find({name: Keyboard})"
    nos Mostraría TODOS los Documents que tengan el Dato y Valor que especificamso dentro de los Paréntesis del Método ".find()", en este caso "{name: Keyboard}".*/
    console.log(products);
}

main();

/**+-Ir Al Archivo "findOne.js" para seguir con los Ejemplos de CRUD.*/