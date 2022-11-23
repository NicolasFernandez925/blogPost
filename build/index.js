"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const Server_1 = require("./config/Server/Server");
dotenv_1.default.config();
const initServer = new Server_1.Server();
initServer.execute();
//# sourceMappingURL=index.js.map