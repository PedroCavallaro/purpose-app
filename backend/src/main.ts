import { modules } from './app.module'
import { env } from './env'
import { FastifyHttpServer, Module, Registry } from './infra'
import { AccountsController } from './modules/accounts/infra'

async function main() {
  console.log(Registry.getInstance().dependencies)
  Module.setMainModule(modules)

  const httpServer =
    Registry.getInstance().inject<FastifyHttpServer>('HttpServer')

  const authController =
    Registry.getInstance().inject<AccountsController>('AccountsController')

  authController.build()

  await httpServer.listen({ port: env.app.port })
}

main()
