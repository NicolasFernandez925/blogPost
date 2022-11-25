import dotenv from 'dotenv';
import path from 'path';

import { Server } from './config/Server/Server';

console.log(`NODE_ENV=${process.env.NODE_ENV!}`);

dotenv.config({
  path: path.resolve(process.cwd(), `${process.env.NODE_ENV!}.env`)
});

const initServer = new Server();

initServer.execute();
