import {
  DB_PROVIDER,
  DataBaseProvider,
  FastifyHttpServer,
  HTTP_SERVER,
  LOGGER,
  PinoLogger,
  Registry
} from './infra'
import { accountsModule } from './modules/accounts'
import { authModule } from './modules/auth'

Registry.getInstance().register(LOGGER, new PinoLogger())
Registry.getInstance().register(HTTP_SERVER, new FastifyHttpServer())
Registry.getInstance().register(DB_PROVIDER, new DataBaseProvider())

export const modules = { ...accountsModule, ...authModule }
