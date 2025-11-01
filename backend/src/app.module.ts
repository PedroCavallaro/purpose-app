import { FastifyHttpServer, dbModule } from './infra'
import { accountsModule } from './modules/accounts/accounts.module'

export const HTTP_SERVER = 'HttpServer'

const httpmodule = {
  [HTTP_SERVER]: new FastifyHttpServer()
}

export const modules = { ...dbModule, ...httpmodule, ...accountsModule }
