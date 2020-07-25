const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true, /**+- La Sintaxis "unique: true" es para que si Existen 2 Documents con este Dato Igual, solo el 1ro es Válido y el 2do da Error.*/
        required: true /**+- La Sintaxis "required: true" es para que si se crea un nuevo Usuario y NO tiene un Username, va a dar Error porque el dato "username" es Escencial y Obligatorio.*/
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('User', userSchema); /**+-Aunque nosotros hayamos creado el Model "User" escrito con Letra Primera Mayúscula y en Singular, en nuestra Base de Datos de MongoDB
la Collection va a aparecer como "users" completamente en Minúscula y en plural.*/