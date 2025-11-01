import { HTTP_SERVER, HttpServer, Inject } from '../../../../infra'

export class AccountsController {
  @Inject(HTTP_SERVER)
  private readonly httpServer!: HttpServer

  constructor() {}

  routes() {
    console.log('httpServer', this.httpServer)
    this.httpServer.route('get', '/', (req, res) => {
      return { oi: 'oi' }
    })
  }

  build() {
    this.routes()
  }
}
