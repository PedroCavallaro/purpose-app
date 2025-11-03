import cors from '@fastify/cors'
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Inject } from '../di'
import { LOGGER, Logger } from '../logger'
import { HttpMethod, HttpServer, ListenOptions } from './http.server'

export class FastifyHttpServer implements HttpServer {
  private app: FastifyInstance
  @Inject(LOGGER)
  private readonly logger: Logger

  constructor() {
    this.app = Fastify({})
    this.app.register(cors, {})
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
    this.logger.log(`Server listening on port: ${options.port}`)

    await this.app.listen({
      port: options.port
    })
  }
}
