import * as Joi from 'joi';
import { IEnvConfig } from './env.interfaces';

export const getSchemmaValidation = () => {
  const validation: IEnvConfig = {
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
  };
  return Joi.object(validation);
};
