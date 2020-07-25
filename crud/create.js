/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro Product Document 
 * Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos en el Archivo "index.js"):_.*/

require('../connection');

const Product = require('../models/Product.js');

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose). A Continuación vamos a Ejecutar 
 * en Mongoose en Método de MongoDB "create()" con la Collection "products" que va a Crear un Nuevo Document Product según el Model de Product que hicimos anteriormente.
 * +-Básicamente volvemos a recrear lo que hicimos con "Lapotop" el el Archivo "index.js" de la Carpeta Principal del Proyecto.*/

const createProducts = async () => {

    const Cellphone = new Product({
        name: 'Cellphone',
        description: 'Samsung Galaxy J2 Prime'
    });
    await Cellphone.save();
};

createProducts();

/**+-Ir Al Archivo "update.js" para seguir con los Ejemplos de CRUD.*/