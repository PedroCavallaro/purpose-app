import { randomUUID } from 'node:crypto'
import { ACCOUNTS_REPOSITORY } from '../..'
import {
  Account,
  AccountsRepository,
  CreateAccountDTO,
  UseCase
} from '../../../../domain'
import { Inject, LOGGER, Logger } from '../../../../infra'

export class CreateAccountUseCase extends UseCase<CreateAccountDTO, Account> {
  @Inject(ACCOUNTS_REPOSITORY)
  private readonly accountRepository: AccountsRepository
  @Inject(LOGGER)
  private readonly logger: Logger

  protected override async _execute(input: CreateAccountDTO): Promise<Account> {
    const userAccount = await this.accountRepository.getUserAccount()

    if (userAccount?.account) return userAccount?.account

    const newAccount = Account.create(randomUUID())

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
