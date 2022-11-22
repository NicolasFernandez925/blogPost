import dotenv from 'dotenv';
import 'reflect-metadata';
import { Server } from './config/Server/Server';

dotenv.config();

const initServer = new Server();

initServer.execute();
