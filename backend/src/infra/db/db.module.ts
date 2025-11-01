import { DataBaseProvider } from './db.provider'

export const databaseProvider = DataBaseProvider.getInstance()

export const DB_PROVIDER = 'DatabaseProvider'
export const dbModule = {
  [DB_PROVIDER]: databaseProvider
}
