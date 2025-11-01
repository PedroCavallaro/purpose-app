import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { HttpServer, ListenOptions } from './http.server'

export class FastifyHttpServer implements HttpServer {
  private app: FastifyInstance

  constructor() {
    this.app = Fastify({
      logger: true
    })
  }

  async listen(options: ListenOptions): Promise<void> {
    console.log(`Server listening on port: ${options.port}`)

    await this.app.listen({
      port: options.port
    })
  }

  route(
    method: 'get' | 'post' | 'patch' | 'delete' | 'put',
    route: string,
    callback: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => any | Promise<any>
  ): HttpServer {
    this.app[method](route, callback)

    return this
  }
}
