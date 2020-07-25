/**+-(5)-GUARDAR UN DATO(DOCUMENT) DENTRO DE LA BASE DE DATOS DE MONGODB:_ Lo Primero que Debemos hacer es Requerir tanto La Conección de Mongoose a la Base de Datos en MongoDB como Nuestro 
 * Product Document Scheme(Esquema Del Documento de un Prototipo de Producto) de la misma forma que a Continuación:_.*/

require('./connection.js');

const Product = require('./models/Product.js');

/**+-(5)-GUARDAR UN DATO(DOCUMENT) DENTRO DE LA BASE DE DATOS DE MONGODB:_ Ahora Supongamos que queremos Agregar un Nuevo Producto en Nuestra Base de Datos, por Ejemplo una Laptop, Lo Que
 *  haríamos sería Crear una Nueva Clase "Product"(En Este caso) y le asignaríamos los Valores Correspondientes como en El Ejemplo Siguiente:_.*/

const Laptop = new Product({
    name: 'Laptop',
    description: 'Lenovo Thinkpad x1 Carbon 6th Generation',
    price: 1300.99
}) /**+-Ahora lo Acabamos de Crear.*/

Laptop.save((err, document) => {
    if (err) console.log(err);
    console.log(document, "+-The Document had been Saved Succesfully.");
}); /**+-Aqui lo acabamos de Guardar en La Base de Datos, si Sale Todo bien y se Guarda el Documento me va a mostrar por Consola el Documento, y si hay un Error me va a mostrar por
Consola el Error.*/

/**+-(6)-ASYNC-AWAIT:_ Para escribir de Forma Mucho Más Fácil y Escalable(Adaptable a Proyectos Grandes y/o en Crecimiento) el Mismo Código que arriba el cual Usamos Para Guardar nuestro
 *  Laptop Product Document usamos Async-Await. Ir al Archivo "async-await.js" para seguir aprendiendo.*/

console.log(Laptop); /**+-"console.log(***)" para ver que estemos haciendo todo bien.*/