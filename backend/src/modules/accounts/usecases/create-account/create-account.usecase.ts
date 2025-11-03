import { ACCOUNTS_REPOSITORY } from '../..'
import {
  Account,
  AccountStatus,
  AccountsRepository,
  CreateAccountDTO,
  UseCase,
  User
} from '../../../../domain'
import { Inject, LOGGER, Logger } from '../../../../infra'

export class CreateAccountUseCase extends UseCase<CreateAccountDTO, Account> {
  @Inject(ACCOUNTS_REPOSITORY)
  private readonly accountRepository: AccountsRepository
  @Inject(LOGGER)
  private readonly logger: Logger

  protected override async _execute(input: CreateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.getUserAccount()

    if (account) return account

    const user = User.create({
      name: input.name,
      email: input.email,
      picture: input?.email
    })

    const newAccount = Account.create({
      status: AccountStatus.ACTIVE,
      createdAt: new Date(),
      user
    })

    await this.accountRepository.createAccount(newAccount)

    return newAccount
  }

  protected override onError(error: unknown): void {
    const err = error as Error

    this.logger.error(
      'Error while creating account',
      err.stack,
      CreateAccountUseCase.name
    )
  }
}
