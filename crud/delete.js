/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro Product Document 
 * Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación(De la Misma forma que lo Hicimos en el Archivo "index.js"):_.*/

require('../connection');

const Product = require('../models/Product.js');

/**+-(7)-C.R.U.D(Create, Read, Update and Delete):_Las CRUDs son las Operaciones mas Típicas de Toda Base De Datos(En este caso MongoDB a través de Mongoose). A Continuación vamos a Ejecutar 
 * en Mongoose en Método de MongoDB "findOneAndDelete()" con la Collection "products" que va a Borrar UN SOLO Document que le Indiquemos.*/

const mongooseDeleteOne = async () => {
    const deleteOne = await Product.deleteOne({name: 'Cellphone'}); /**+-Para Borrar de la Base de Datos UN SOLO Document que le Indiquemos usamos el Método
    "deleteOne({data: value})" que va a Borrar EL PRIMER Document que el Dato y Valor que le Indicamos.*/
    console.log(deleteOne);
};

//mongooseDeleteOne(); /**+-La Ejecución de esta Función fue Comentada para poder Ejecutar en la Base de Datos la Función Siguiente.*/


/**+-PARA BORRAR VARIOS DOCUMENT A LA VEZ:_.*/
const mongooseDeleteMany = async () => {
    const deleteMany = await Product.deleteMany({price: 899.0}); /**+-Para Borrar de la Base de Datos TODOS los Documents que le Indiquemos usamos el Método
    "deleteMany({data: value})" que va a Borrar TODOS los Document con el Dato y Valor que le Indicamos.*/
    console.log(deleteMany);
};

//mongooseDeleteMany(); /**+-La Ejecución de esta Función fue Comentada para poder Ejecutar en la Base de Datos la Función Siguiente.*/


/**+-PARA BORRARUN DOCUMENT POR SU ID:_.*/
const mongooseDeletebyId = async () => {
    const deleteById = await Product.findBuIdAndDelete('48664fsuiaiopadka685'); /**+-Para Borrar de la Base de Datos EL Document Cuya ID le Indiquemos usamos el Método
    "findBuIdAndDelete('idHere')" que va a Borrar el Document con String del ID le Indicamos.*/
    console.log(deleteById);
};

mongooseDeletebyId();