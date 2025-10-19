import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import { Injectable } from '@nestjs/common'
import { Database } from 'db/entities'
import { FileMigrationProvider, Kysely, Migrator, MysqlDialect } from 'kysely'
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

  get db() {
    return new Kysely<Database>({
      dialect: new MysqlDialect({
        pool: createPool({
          uri: process.env.DB_URL,
          user: process.env.DD_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        })
      })
    })
  }

  get migrator() {
    return new Migrator({
      db: this.db,
      provider: new FileMigrationProvider({
        fs,
        path,
        migrationFolder: path.join(__dirname, '..', '..', '..', 'db/migrations')
      })
    })
  }

  async migrateToLatest() {
    const { error, results } = await this.migrator.migrateToLatest()

    results?.forEach((it) => {
      if (it.status === 'Success') {
        return console.log(
          `migration "${it.migrationName}" was executed successfully`
        )
      }

      console.error(`failed to execute migration "${it.migrationName}"`)
    })

    if (error) {
      console.error('failed to migrate')
      console.error(error)
      process.exit(1)
    }

    await this.db.destroy()
  }

  async migrationDown() {
    const { error, results } = await this.migrator.migrateDown()

    results?.forEach((it) => {
      if (it.status === 'Success') {
        return console.log(
          `migration "${it.migrationName}" rollback successfully`
        )
      }

      console.error(
        `failed to execute migration rollback "${it.migrationName}"`
      )
    })

    if (error) {
      console.error('failed to rollback')
      console.error(error)
      process.exit(1)
    }

    await this.db.destroy()
  }
}
