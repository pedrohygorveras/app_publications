import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, ".env") });

interface EnvironmentVariables {
  APP_VERSION: string;
  APP_NAME: string;
  APP_PORT: string;
  APP_HOST: string;
  SECRET: string;
  SECRET_CRYPT: string;
  REFRESH_TOKEN_SECRET: string;
  TOKEN_LIFE: string;
  REFRESH_TOKEN_LIFE: string;
}

const env: EnvironmentVariables = {
  APP_VERSION: process.env.APP_VERSION!,
  APP_NAME: process.env.APP_NAME!,
  APP_PORT: process.env.APP_PORT!,
  APP_HOST: process.env.APP_HOST!,
  SECRET: process.env.SECRET!,
  SECRET_CRYPT: process.env.SECRET_CRYPT!,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
  TOKEN_LIFE: process.env.TOKEN_LIFE!,
  REFRESH_TOKEN_LIFE: process.env.REFRESH_TOKEN_LIFE!,
};

export default env;
