import {
  HTTP_SERVER,
  HttpServer,
  Inject,
  LOGGER,
  Logger
} from '../../../../infra'
import { CREATE_ACCOUNT } from '../../accounts.module'
import { CreateAccountUseCase } from '../../usecases'

export class AccountsController {
  @Inject(HTTP_SERVER)
  private readonly httpServer!: HttpServer
  @Inject(LOGGER)
  private readonly logger!: Logger
  @Inject(CREATE_ACCOUNT)
  private readonly ca!: CreateAccountUseCase

  constructor() {}

  build() {
    this.httpServer.route('get', '/', (req: any, res: any) => {
      this.ca.execute({
        email: 'a',
        name: 'a'
      })

      return { oi: 'oi' }
    })
  }
}
