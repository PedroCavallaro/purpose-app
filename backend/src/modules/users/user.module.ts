import { Module } from '@nestjs/common'
import { UsersRepository } from './infra'

@Module({
  providers: [UsersRepository]
})
export class UsersModule {}
