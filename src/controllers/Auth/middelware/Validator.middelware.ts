import { check, ValidationChain } from 'express-validator';

export class ValidatorAuthMiddelware {
  public static register(): ValidationChain[] {
    return [
      check('email').notEmpty().withMessage('El email es requerido').isEmail().withMessage('Debe ser un email valido'),
      check('password')
        .notEmpty()
        .withMessage('El password es requerido')
        .isLength({
          min: 6
        })
        .withMessage('El password debe tener almomenos 6 caracteres'),
      check('name').notEmpty().withMessage('El name es requerido').isString().withMessage('El name debe ser un string')
    ];
  }

  public static login(): ValidationChain[] {
    return [
      check('email').notEmpty().withMessage('El email es requerido').isEmail().withMessage('Debe ser un email valido'),
      check('password')
        .notEmpty()
        .withMessage('El password es requerido')
        .isString()
        .withMessage('El password debe ser un string')
    ];
  }
}
