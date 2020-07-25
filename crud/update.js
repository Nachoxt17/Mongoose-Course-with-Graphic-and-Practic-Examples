/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro Product Document 
 * Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos en el Archivo "index.js"):_.*/

require('../connection');

const Product = require('../models/Product.js');

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose). A Continuación vamos a Ejecutar 
 * en Mongoose en Método de MongoDB "update()" con la Collection "products" que va a Actualizar/Crear el Dato que le Indiquemos.*/

const updateProducts = async () => {

    const products = await Product.update({name: 'Cellphone'}, {/**+-El Método de MongoDB en Mongoose "Collection.update({dataInDocumetToFind}, {dataToUpdateInDocument});" toma como 1er Parámetro|--.*/
        price: 850.5                                         /**--> un Dato cualquiera en El/Los Document/s cuyo/s dato/s queremos Actualizar(para Encontrar El/Los Document/s con el/los Dato/s|--.*/
    });                                                      /**--> a Actualizar/Crear) y como 2do Parámetro el/los Dato/s y Sus Valores de ese/esos Document/s que queremos Actualizar en Sí.*/
    console.log(products);
};

//updateProducts(); /**+-La Ejecución de esta Función fue Comentada para poder Ejecutar en la Base de Datos la Función Siguiente.*/

/**+-Ahora si Ejecutamos en Node el Comando "node crud/update.js" y luego en la Consola de Consultas (de MongoDB) Mongo los Comandos "use mywebstore" y después "db.products.find().pretty()"
 * vamos a ver que el Objeto de JS correspondiente al Document del Product con "name: 'Cellphone'" va a tener un "price: 850.5"(que antes era "price: 0").*/

const updateOneProduct = async () => {/**+-Para Actualizar/Crear un/os Dato/s de UN SOLO Document hacemos lo Siguiente.*/

    const oneProduct = await Product.findOne({name: 'Laptop'});/**+-Buscamos ese Document en específico con el Método de MongoDB en Mongoose "findOne()".*/                                                    
    console.log(oneProduct);
    oneProduct.description = 'The Best Gaming Laptop Ever';/**+-Le vambiamos el/los valor/es del/los Dato/s que queramos.*/
    oneProduct.save(); /**+-Finalmente Guardamos en la base de Datos el Document ya actualizado.*/
};

//updateOneProduct(); /**+-La Ejecución de esta Función fue Comentada para poder Ejecutar en la Base de Datos la Función Siguiente.*/

const updateOtherOneProduct = async () => {/**+-Para Actualizar/Crear un/os Dato/s de UN SOLO Document Igual que Arriba PERO MÁS SIMPLE hacemos lo Siguiente.*/

    const otherProduct = await Product.findOneAndUpdate({name: 'Keyboard'}, {
        description: 'The Best Gaming Keyboard Ever'
    }, {new: true});/**+-Repetimos el Mismo Proceso con los mismos Parámetros y en el mismo orden que con el Método "update()" PERO usando el Método "findOneAndUpdate()" para así poder
    Actualizar Datos de UN SOLO Document PERO de una manera más simple que la anterior.*/                                                
    console.log(otherProduct);
};

updateOtherOneProduct();

/**+-Ir Al Archivo "delete.js" para seguir con los Ejemplos de CRUD.*/