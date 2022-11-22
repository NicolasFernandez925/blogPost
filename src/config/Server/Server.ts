import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from '../../routes';
import { SingletonDatabase } from '../../db/database';
import { Error } from 'Sequelize';

export class Server {
  private readonly app;
  private readonly port;
  private readonly userNameDb;
  private readonly passwordDb;
  private readonly nameDb;
  private readonly configDb;

  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? 3001;

    this.routes();
    this.middelwares();

    this.userNameDb = process.env.USERNAME_DB!;
    this.passwordDb = process.env.PASSWORD_DB!;
    this.nameDb = process.env.NAME_DB!;

    this.configDb = {
      host: 'localhost',
      dialect: 'mysql'
    };
  }

  private routes(): void {
    this.app.use(router);
  }

  private middelwares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
      res.status(500);
      res.json({ message: err.message });
    });
  }

  async execute(): Promise<void> {
    this.listen();
    this.connectDatabase();
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`running in the port ${this.port}`);
    });
  }

  private async connectDatabase(): Promise<void> {
    SingletonDatabase.create({
      nameDb: this.nameDb,
      userNameDb: this.userNameDb,
      passwordDb: this.passwordDb,
      configDb: this.configDb
    });

    try {
      await SingletonDatabase.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
