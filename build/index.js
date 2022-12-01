"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const Server_1 = require("./config/Server/Server");
console.log(`NODE_ENV=${process.env.NODE_ENV}`);
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
});
const initServer = new Server_1.Server();
initServer.execute();
//# sourceMappingURL=index.js.map