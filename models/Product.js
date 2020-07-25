/**+-(4)-Mongoose SCHEMAS( https://mongoosejs.com/docs/schematypes.html ):_Los "Esquemas" de Mongoose son los "Prototipos" de la Estructura de Los Datos en Común que Va a Tener Cada 
 * tipo de Document de cada Collection de Nuestra Base de Datos de MongoDB(Todos van a Tener un Nombre, Descripción, Precio, Imagen, etc). Esta es una característica que MongoDB NO trae 
 * Incorporada(Las Estructuras en los Datos de los Documents) PERO usando Mongoose se lo podemos incorporar.
 * +-Para Poder Crear un Esquema, Requerimos "const { Schema, model } = require('mongoose');" en un Archivo Con el Nombre del Tipo de Document al Cual le queremos crear un Esquema (Ej:_ "Products")
 * y debajo Creamos una Nueva Clase "new Schema({***});" en donde en "***" escribimos en Formato JSON el Nombre de Cada Dato y El Tipo de Valor que se espera en Cada uno(String, Boolean, Number,
 *  Array, etc). También a cada Dato Le Podemos asignar un Objeto de JS con 2 Sub-Datos:_ "type: ***" para asignarle el Tipo de Valor que se espera que se asigne en él y "default: ***"
 * con el Valor Por Defecto que le Pondremos a ese Dato en Caso de que llegado el Momento no se le asigne ninguno. Abajo damos este Ejemplo con el Dato "price"; Se espera que como Valor se le 
 * asigne un Number pero en caso de no recibir ningún valor se le Asigna Automáticamente "0".*/

const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    }
});

/**+-Lugo para después Poder Exportar e Interactuar con este Nuevo Schema(Esquema) lo asignamos a un Model(Modelo) con la Sintaxis "model(*'schemaName'*, shemaConst);" 
 * y lo Exportamos con "module.export = ***;". Ver Más en https://mongoosejs.com/docs/models.html .*/
module.exports = model('Product', productSchema);/**+-Aunque nosotros hayamos creado el Model "Product" escrito con Letra Primera Mayúscula y en Singular, en nuestra Base de Datos de MongoDB
la Collection va a aparecer como "products" completamente en Minúscula y en plural.*/

/**+-(5)-GUARDAR UN DATO(DOCUMENT) DENTRO DE LA BASE DE DATOS DE MONGODB:_ (Ir Al Archivo Index.js dentro de la Carpeta Principal del Proyecto para Seguir Aprendiendo).*/