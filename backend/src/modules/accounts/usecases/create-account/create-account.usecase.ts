import {
  Account,
  AccountsRepository,
  CreateAccountDTO,
  UseCase
} from '../../../../domain'
import { Inject } from '../../../../infra'
import { ACCOUNTS_REPOSITORY } from '../../accounts.module'

export class CreateAccountUseCase
  implements UseCase<CreateAccountDTO, Account>
{
  @Inject(ACCOUNTS_REPOSITORY)
  private readonly accountRepository: AccountsRepository

  async execute(input: CreateAccountDTO): Promise<Account> {
    const accounts = await this.accountRepository.getUserAccount()

    throw new Error('a')
  }
}
