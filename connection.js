const mongoose = require('mongoose');
/**+-(1)-Instalar Mongoose( https://mongoosejs.com/docs/ ):_ Para Instalar y Poder Usar Mongoose Debemos Primeros debemos Tener Corriendo MongoDB en nuestra PC a través de Ejecutar el Comando "mongod" en la Consola
 *  en la Ubicación de Nuestro Proyecto y luego Instalamos Mongoose Escribiendo y Ejecutando "npm i mongoose" y luego en el/los Archivo/s que queramos usarlo Guardarlo en Una Constante con su 
 * Mismo Nombre en la Requiramos su Módulo NPM, así:_ "const mongoose = require('mongoose');".*/

mongoose.connect('mongodb://localhost:27017/mywebstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/**+-(2)-Conectar Mongoose a MongoDB:_ Para poder usar Mongoose con MongoDB debemos conectarlo usando la Sintaxis 
 * "mongoose.connect('++ProtocoloDeConección++://++DirecciónDeLaBaseDeDatos++:++NºDelPuerto++/++NombreDeLaBaseDeDatos++', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});".
 * +-La Dirección De la Base de Datos + Nº Del Puerto + Nombre de La Base de Datos es === a URI (Uniform Resource Identifier). En mi caso yo lo tengo configurado con todas las Opciones Por Defecto y con la 
Base de Datos "mywebstore", que se creará automáticamente al crear el Primer Dato en Ella. +-Para finalmente Ejecutarla, Ejecutamos en la Consola el Comando "node index.js".*/


/**+-(3)-Mongoose EVENTS (https://mongoosejs.com/docs/connections.html#connection-events):_ Los Eventos de Mongoose sirven como "Middlewares" a Ejecutar dependiendo del Estado de la Conección. 
 * Las conexiones heredan de la clase EventEmitter de Node.js y emiten eventos cuando algo le sucede a la conexión, como perder la conectividad con el servidor MongoDB.*/
mongoose.connection.once('open', _ => {
    console.log('Database is connected to', 'mongodb://localhost:27017/mywebstore');/**+-También se Puede Guardar la URI en una Constante y luego asignarla aquí.*/
})

mongoose.connection.on('error', (err) => { 
    console.log(err);
    /**+-Este Evento "error" Se emite si se produce un error en una conexión, como un parseError debido a datos mal formados o una carga útil superior a 16 MB. +-Este Event "error" cumple la misma función que si
     * después del "mongoose.connect('mongodb://localhost:27017/mywebstore', {***});" hubiéramos colocado la Sintaxis ".catch(err => console.log(err));".*/
});

/**+-(4)-Mongoose SCHEMAS:_(Ir a la Carpeta "models" al Archivo "Products.js" para seguir aprendiendo).*/