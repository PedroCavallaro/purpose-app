import { Injectable } from '@nestjs/common'
import { Account, CreateAccountDTO, UseCase } from 'src/domain'
import { AccountsRepository } from '../../infra'

@Injectable()
export class CreateAccountUseCase
  implements UseCase<CreateAccountDTO, Account>
{
  constructor(private readonly accountRepository: AccountsRepository) {}

  async execute(input: CreateAccountDTO): Promise<Account> {
    //    this.accountRepository.createAccount()

    throw new Error('a')
  }
}
