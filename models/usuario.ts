import { Schema } from 'mongoose';


const usuarioSchema = new Schema({

    name: {
        type: String,
        required: [true, 'el nombre es necesario']
    },
    lastName: {
        type: String,
        required: [true, 'el nombre es necesario']
    }
})