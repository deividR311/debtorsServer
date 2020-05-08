"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = new server_1.default();
//routes
server.app.use('/user', user_1.default);
//connection BD
mongoose_1.default.connect('mongodb://localhost:27017/debtors', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log('Database ONLINE');
});
// express (Server)
server.start(() => {
    console.log('servidor corriendo en el puerto ' + server.port);
});
