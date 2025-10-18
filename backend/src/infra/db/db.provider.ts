import { Injectable } from '@nestjs/common'
import { Database } from 'db/entities'
import { Kysely, MysqlDialect } from 'kysely'
import { createPool } from 'mysql2'

@Injectable()
export class DataBaseProvider extends Kysely<Database> {
  static instance: DataBaseProvider

  private constructor() {
    const dialect = new MysqlDialect({
      pool: createPool({
        uri: process.env.DB_URL,
        user: process.env.DD_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      })
    })

    super({
      dialect
    })
  }

  static getInstance() {
    if (!DataBaseProvider.instance) {
      DataBaseProvider.instance = new DataBaseProvider()

      return DataBaseProvider.instance
    }

    return DataBaseProvider.instance
  }
}
