import { DataBaseProvider } from 'src/infra'

async function rollback() {
  await DataBaseProvider.getInstance().migrationDown()
}

rollback()
