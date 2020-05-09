import { Schema, Document, model} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'the name is necessary']
    },
    lastName: {
        type: String,
        required: [true, 'the lastName is necessary']
    },
    document: {
        type: Number,
        unique: true,
        required: [true, 'the document is necessary']
    },
    role: {
        type: String,
        required: [true, 'the role is necessary']
    },
    nickname: {
        type: String,
        required: [true, 'the nickname is necessary']
    },
    password: {
        type: String,
        required: [true, 'the password is necessary']
    },
    image: {
        type: String,
        default: 'iron.png'
    }
});

userSchema.method( 'comparePassword', function( password: string = '' ): boolean {

    if ( bcrypt.compareSync( password, this.password ) ) {

        return true;

    }else {
        
        return false;

    }

});

interface IUser extends Document {
    name: string;
    lastName: string;
    document: number;
    role: string;
    nickname: string;
    password: string;
    image: string;

    comparePassword( password: string ): boolean;
}

export const User = model<IUser>('User', userSchema);