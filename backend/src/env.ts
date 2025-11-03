import * as dotenv from 'dotenv'

dotenv.config()

class Env {
  static getEnv() {
    return {
      app: {
        port: Number(process.env.PORT) ?? 300,
        nodeEnv: process.env.NODE_ENV
      },
      jwt: {
        secret: process.env.JWT_SECRET ?? 'secret',
        expiresIn: 60 * 60 * 60
      },
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
