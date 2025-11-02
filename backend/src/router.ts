import { Inject } from './infra'
import { AccountsController } from './modules/accounts'
import { ACCOUNTS_CONTROLLER } from './modules/accounts'

export class Router {
  @Inject(ACCOUNTS_CONTROLLER)
  private readonly accountsController!: AccountsController

  init() {
    this.accountsController.build()
  }
}
