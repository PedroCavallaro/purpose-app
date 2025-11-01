export interface ListenOptions {
  port: number
}

export type HttpMethod = 'get' | 'post' | 'patch' | 'delete' | 'put'

export const HTTP_SERVER = 'HttpServer'

export interface HttpServer {
  route(method: HttpMethod, route: string, callback: Function): HttpServer

  listen(options: ListenOptions): void | Promise<void>
}
