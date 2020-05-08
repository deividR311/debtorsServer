import { Schema } from 'mongoose';


const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'el nombre es necesario']
    }
})