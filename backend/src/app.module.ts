import {
  DB_PROVIDER,
  DataBaseProvider,
  FastifyHttpServer,
  HTTP_SERVER,
  LOGGER,
  PinoLogger,
  Registry
} from './infra'
import {
  ACCOUNTS_CONTROLLER,
  ACCOUNTS_REPOSITORY,
  CREATE_ACCOUNT
} from './modules/accounts'
import {
  AccountsController,
  AccountsRepositoryDatabase
} from './modules/accounts/infra'
import { CreateAccountUseCase } from './modules/accounts/usecases'

Registry.getInstance().register(HTTP_SERVER, new FastifyHttpServer())
Registry.getInstance().register(DB_PROVIDER, new DataBaseProvider())
Registry.getInstance().register(LOGGER, new PinoLogger())

Registry.getInstance().register(
  ACCOUNTS_REPOSITORY,
  new AccountsRepositoryDatabase()
)
Registry.getInstance().register(CREATE_ACCOUNT, new CreateAccountUseCase())
Registry.getInstance().register(ACCOUNTS_CONTROLLER, new AccountsController())

export const modules = {}
