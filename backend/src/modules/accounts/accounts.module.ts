import { DataBaseProvider } from '../../infra'
import { ACCOUNTS_CONTROLLER, ACCOUNTS_REPOSITORY, CREATE_ACCOUNT } from './'
import { AccountsController, AccountsRepositoryDatabase } from './infra'
import { CreateAccountUseCase } from './usecases'

export const accountsModule = {
  [ACCOUNTS_REPOSITORY]: new AccountsRepositoryDatabase(
    DataBaseProvider.getInstance()
  ),
  [CREATE_ACCOUNT]: new CreateAccountUseCase(),
  [ACCOUNTS_CONTROLLER]: new AccountsController()
}
