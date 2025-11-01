import {
  Account,
  AccountsRepository,
  CreateAccountDTO,
  UseCase
} from '../../../../domain'
import { Inject } from '../../../../infra'

export class CreateAccountUseCase
  implements UseCase<CreateAccountDTO, Account>
{
  @Inject('AccountsRepository')
  private readonly accountRepository: AccountsRepository

  async execute(input: CreateAccountDTO): Promise<Account> {
    const accounts = await this.accountRepository.getUserAccount()

    throw new Error('a')
  }
}
