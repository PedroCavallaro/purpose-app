import { modules } from './app.module'
import { env } from './env'
import { FastifyHttpServer, Module, Registry } from './infra'
import { Router } from './router'

async function main() {
  Module.setMainModule(modules)

  const router = new Router()

  const httpServer =
    Registry.getInstance().inject<FastifyHttpServer>('HttpServer')

  router.init()

  await httpServer.listen({ port: env.app.port })
}

main()
