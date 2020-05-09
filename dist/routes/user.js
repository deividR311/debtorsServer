"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const userRoutes = express_1.Router();
const userController = new user_1.UserController();
userRoutes.post('/create', (req, res) => { userController.createUser(req, res); });
userRoutes.post('/login', (req, res) => { userController.login(req, res); });
exports.default = userRoutes;
