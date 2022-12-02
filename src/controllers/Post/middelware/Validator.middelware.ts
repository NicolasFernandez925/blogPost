import { check, param, ValidationChain } from 'express-validator';

export class ValidatorPostMiddelware {
  public static post(): ValidationChain[] {
    return [
      check('title')
        .notEmpty()
        .withMessage('El title es requerido')
        .isString()
        .withMessage('El title debe ser un string'),
      check('contents')
        .notEmpty()
        .withMessage('El contents es requerido')
        .isString()
        .withMessage('El contents debe ser un string'),
      check('status')
        .notEmpty()
        .withMessage('status es requerido')
        .isString()
        .withMessage('El status debe ser un string'),
      check('category_id')
        .notEmpty()
        .withMessage('category_id es requerida')
        .isNumeric()
        .withMessage('category_id debe ser un numero'),
      check('labels').isArray().withMessage('labels deben ser un array'),
      check('labels.*.name')
        .notEmpty()
        .withMessage('El nombre del labels es requerido')
        .isString()
        .withMessage('El nombre del labels debe ser un string')
    ];
  }

  public static checkParam(key: string): ValidationChain[] {
    return [
      param(key).notEmpty().withMessage(`${key} es requerido`).isNumeric().withMessage(`${key} debe ser un numero`)
    ];
  }
}
