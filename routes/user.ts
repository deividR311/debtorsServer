import { Router, Request, Response } from "express";
import { UserController } from '../controllers/user';


const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/create', ( req: Request, res: Response ) => { userController.createUser(req, res) });
userRoutes.post('/login', ( req: Request, res: Response ) => { userController.login(req, res) });

export default 
    userRoutes;
