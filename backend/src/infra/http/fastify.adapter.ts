import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { HttpMethod, HttpServer, ListenOptions } from './http.server'

export class FastifyHttpServer implements HttpServer {
  private app: FastifyInstance

  constructor() {
    this.app = Fastify({
      logger: true
    })
  }
  route(
    method: HttpMethod,
    route: string,
    callback: (request: FastifyRequest, reply: FastifyReply) => unknown
  ): HttpServer {
    this.app[method](route, callback)

    return this
  }

  async listen(options: ListenOptions): Promise<void> {
    console.log(`Server listening on port: ${options.port}`)

    await this.app.listen({
      port: options.port
    })
  }
}
