import { Request, Response } from "express";
import { User } from "../models/usuario";
import bcrypt from 'bcrypt';

export class UserController {

    constructor() { }

    public async createUser( req: Request, res: Response ) {

        const body = req.body;

        const user = {
            name: body.name,
            lastName: body.lastName,
            document: body.document,
            role: body.role,
            nickname: body.nickname,
            password: bcrypt.hashSync(body.password, 10),
            image: body.image
        };
    
        await User.create( user ).then( userDB => {
            res.json({
                ok: true,
                user: userDB
            })
        }).catch( err => {
            res.json({
                ok: false,
                err
            })
        });
    }

    public async login( req: Request, res: Response ) {

        const body = req.body;

        User.findOne( {document: body.document}, ( err, userDB ) => {

            if ( err ) throw err;
            
            if ( !userDB ) {

                return res.json({
                    ok: false,
                    message: 'user/password invalid'
                });
                
            }

            if ( userDB.comparePassword( body.password ) ) {

                res.json({
                    ok: true,
                    token: 'sdfghjgfdsadghgdfsfghjgfd'
                });

            }else {

                return res.json({
                    ok: false,
                    message: 'user/password invalid ***'
                });

            }
        } );
    }

}