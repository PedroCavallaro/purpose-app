import { FastifyHttpServer, HTTP_SERVER, Registry, dbModule } from './infra'
import { accountsModule } from './modules/accounts'

Registry.getInstance().register(HTTP_SERVER, new FastifyHttpServer())

export const modules = { ...dbModule, ...accountsModule }
