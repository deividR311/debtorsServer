import { Router, Request, Response } from "express";


const userRoutes = Router();


userRoutes.get('/prueba', ( req: Request, res: Response ) => {

    res.json({
        ok: true,
        message: 'test method runing correctly'
    })

})

export default 
    userRoutes;
