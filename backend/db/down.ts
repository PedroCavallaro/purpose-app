import { DataBaseProvider } from 'src/infra'

async function down() {
  await DataBaseProvider.getInstance().migrationDown()
}

down()
