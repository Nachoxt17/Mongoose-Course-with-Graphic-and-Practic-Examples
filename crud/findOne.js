/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro Product Document 
 * Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos en el Archivo "index.js"):_.*/

require('../connection');

const Product = require('../models/Product.js');

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose). A Continuación vamos a Ejecutar 
 * en Mongoose en Método de MongoDB "findOne()" con la Collection "products" que nos va a Mostrar SOLO UN Document de esta Collection, el Primero que Cumpla con las Características que le
 *  Espicifiquemos al método.*/

async function getProduct() {
    const product = await Product.findOne({name: 'Keyboard'}); /**+-Con la Sintaxis "Product.findOne({name: 'Keyboard'});" le estamos Pidiendo a MongoDB a través de Mongoose que nos muestre el
    Primer Document de la Collection "products" que Tenga un Dato "name" que como valor tenga el String 'Keyboard'.*/
    console.log(product);
};

getProduct();

/**+-Ir Al Archivo "create.js" para seguir con los Ejemplos de CRUD.*/