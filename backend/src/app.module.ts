import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './infra'
import { AccountsModule } from './modules/accounts/accounts.module'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AccountsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
