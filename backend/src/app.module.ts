import { Module, OnModuleInit } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DataBaseProvider, DatabaseModule } from './infra'
import { AccountsModule } from './modules/accounts/accounts.module'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AccountsModule],
  controllers: [],
  providers: []
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await DataBaseProvider.getInstance().migrateToLatest()
  }
}
