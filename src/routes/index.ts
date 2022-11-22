import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

const PATH_ROUTER = `${__dirname}`;

const cleanFileName = (fileName: string): string => {
  const file = fileName.split('.').shift()!;
  return file;
};

// Creo rutas dinámicas en base al nombre del archivo DENTRO de la carpeta ROUTES
readdirSync(PATH_ROUTER).forEach((fileName: string): void => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== 'index') {
    import(`./${cleanName}`)
      .then((moduleRouter) => {
        router.use(`/api/${cleanName}`, moduleRouter.router);
      })
      .catch((err) => console.log(err));
  }
});

export { router };
