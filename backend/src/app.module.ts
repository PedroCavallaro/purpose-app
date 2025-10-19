import { Module, OnModuleInit } from '@nestjs/common'
import { DataBaseProvider, DatabaseModule } from './infra'
import { AccountsModule } from './modules/accounts/accounts.module'

@Module({
  imports: [DatabaseModule, AccountsModule],
  controllers: [],
  providers: []
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await DataBaseProvider.getInstance().migrateToLatest()
  }
}
