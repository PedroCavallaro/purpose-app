import { Module } from '@nestjs/common'
import { AccountsRepository } from './infra'
import { accountUseCases } from './usecases'

@Module({
  providers: [...accountUseCases, AccountsRepository]
})
export class AccountsModule {}
