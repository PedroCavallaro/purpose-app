import { DataBaseProvider } from './db.provider'

export const databaseProvider = DataBaseProvider.getInstance()

export const dbModule = {
  [DataBaseProvider.name]: databaseProvider
}
