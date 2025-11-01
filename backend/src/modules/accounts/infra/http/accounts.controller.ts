import { HTTP_SERVER, HttpServer, Inject } from '../../../../infra'

export class AccountsController {
  @Inject(HTTP_SERVER)
  private readonly httpServer!: HttpServer

  constructor() {}

  build() {
    this.httpServer.route('get', '/', (req: any, res: any) => {
      return { oi: 'oi' }
    })
  }
}
