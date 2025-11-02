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

Registry.getInstance().register(HTTP_SERVER, new FastifyHttpServer())
Registry.getInstance().register(DB_PROVIDER, new DataBaseProvider())
Registry.getInstance().register(LOGGER, new PinoLogger())

export const modules = { ...accountsModule }
