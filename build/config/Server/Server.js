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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../../routes");
const database_1 = require("../../db/database");
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.routes();
        this.middelwares();
        this.userNameDb = process.env.USERNAME_DB;
        this.passwordDb = process.env.PASSWORD_DB;
        this.nameDb = process.env.NAME_DB;
        this.configDb = {
            host: 'localhost',
            dialect: 'mysql'
        };
    }
    routes() {
        this.app.use(routes_1.router);
    }
    middelwares() {
        this.app.use((err, req, res, next) => {
            console.log(err);
            res.status(500);
            res.json({ message: err.message });
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            this.listen();
            this.connectDatabase();
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`running in the port ${this.port}`);
        });
    }
    connectDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.SingletonDatabase.create({
                nameDb: this.nameDb,
                userNameDb: this.userNameDb,
                passwordDb: this.passwordDb,
                configDb: this.configDb
            });
            try {
                yield database_1.SingletonDatabase.sequelize.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map