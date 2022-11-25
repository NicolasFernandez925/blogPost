"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
});
console.log(process.cwd());
console.log(`NODE_ENV=${process.env.NODE_ENV}`);
module.exports = {
    development: {
        username: process.env.USERNAME_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.NAME_DB,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql'
    },
    production: {
        username: process.env.USERNAME_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.NAME_DB,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql'
    }
};
//# sourceMappingURL=config.js.map