import { DataBaseProvider } from 'src/infra'

async function up() {
  await DataBaseProvider.getInstance().migrateToLatest()
}

up()
