import { InjectionToken } from 'injection-js';
import { Validator } from './Validator';

export const IValidatorToken = new InjectionToken<Validator>('IValidator');
