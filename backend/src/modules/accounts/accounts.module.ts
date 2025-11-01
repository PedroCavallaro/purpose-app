import { DataBaseProvider } from 'src/infra'
import { AccountsController, AccountsRepositoryDatabase } from './infra'

export const ACCOUNTS_REPOSITORY = 'AccountsRepository'
export const ACCOUNTS_CONTROLLER = 'AccountsController'

export const accountsModule = {
  [ACCOUNTS_CONTROLLER]: new AccountsController(),
  [ACCOUNTS_REPOSITORY]: new AccountsRepositoryDatabase(
    DataBaseProvider.getInstance()
  )
}
