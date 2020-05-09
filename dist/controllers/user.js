"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../models/usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() { }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const user = {
                name: body.name,
                lastName: body.lastName,
                document: body.document,
                role: body.role,
                nickname: body.nickname,
                password: bcrypt_1.default.hashSync(body.password, 10),
                image: body.image
            };
            yield usuario_1.User.create(user).then(userDB => {
                res.json({
                    ok: true,
                    user: userDB
                });
            }).catch(err => {
                res.json({
                    ok: false,
                    err
                });
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            usuario_1.User.findOne({ document: body.document }, (err, userDB) => {
                if (err)
                    throw err;
                if (!userDB) {
                    return res.json({
                        ok: false,
                        message: 'user/password invalid'
                    });
                }
                if (userDB.comparePassword(body.password)) {
                    res.json({
                        ok: true,
                        token: 'sdfghjgfdsadghgdfsfghjgfd'
                    });
                }
                else {
                    return res.json({
                        ok: false,
                        message: 'user/password invalid ***'
                    });
                }
            });
        });
    }
}
exports.UserController = UserController;
