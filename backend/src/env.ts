import * as dotenv from 'dotenv'

dotenv.config()

class Env {
  static getEnv() {
    return {
      port: Number(process.env.PORT) ?? 300,
      db: {
        host: process.env.DB_HOST ?? '127.0.0.1',
        name: process.env.DB_NAME ?? 'goal',
        password: process.env.DB_PASSWORD ?? 'admin',
        user: process.env.DB_USER ?? 'admin',
        port: Number(process.env.DB_PORT) ?? 5432
      }
    }
  }
}

export const env = Env.getEnv()
