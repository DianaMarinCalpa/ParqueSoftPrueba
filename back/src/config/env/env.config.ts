import { registerAs } from '@nestjs/config';
import { IEnvConfig } from './env.interfaces';

export default registerAs('config', () => {
  const config: IEnvConfig = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  };
  return config;
});
