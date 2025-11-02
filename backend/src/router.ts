import { Inject } from './infra'
import { ACCOUNTS_CONTROLLER } from './modules/accounts'
import { AccountsController } from './modules/accounts/infra'

export class Router {
  @Inject(ACCOUNTS_CONTROLLER)
  private readonly accountsController!: AccountsController

  init() {
    this.accountsController.build()
  }
}
