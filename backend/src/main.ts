import { HTTP_SERVER, modules } from './app.module'
import { env } from './env'
import { FastifyHttpServer, Module, Registry } from './infra'

async function main() {
  Module.setMainModule(modules)

  const httpServer =
    Registry.getInstance().inject<FastifyHttpServer>(HTTP_SERVER)

  await httpServer.listen({ port: env.app.port })
}

main()
