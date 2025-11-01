export interface ListenOptions {
  port: number
}

export interface HttpServer {
  route(
    method: 'get' | 'post' | 'patch' | 'delete' | 'put',
    route: string,
    callback: Function
  ): HttpServer

  listen(options: ListenOptions): void | Promise<void>
}
