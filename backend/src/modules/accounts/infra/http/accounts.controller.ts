import { CREATE_ACCOUNT } from '../..'
import { HTTP_SERVER, HttpServer, Inject } from '../../../../infra'
import { CreateAccountUseCase } from '../../usecases'

export class AccountsController {
  @Inject(HTTP_SERVER)
  private readonly httpServer: HttpServer
  @Inject(CREATE_ACCOUNT)
  private readonly createAccountUseCase: CreateAccountUseCase

  constructor() {}

  async createAccount(req: any, res: any) {
    const body = req.body

    return await this.createAccountUseCase.execute(body)
  }

  build() {
    this.httpServer.route('get', '/', (req: any, res: any) =>
      this.createAccount(req, res)
    )
  }
}
