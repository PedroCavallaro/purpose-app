import { ACCOUNTS_REPOSITORY } from '../..'
import {
  Account,
  AccountsRepository,
  AppError,
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
    const account = await this.accountRepository.getUserAccount()

    if (account) throw new AppError(401, 'Conta já registrada')

    throw new Error('a')
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
