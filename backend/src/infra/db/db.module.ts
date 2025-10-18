import { Global, Module } from '@nestjs/common'
import { DataBaseProvider } from './db.provider'

@Global()
@Module({
  providers: [
    {
      provide: DataBaseProvider,
      useValue: DataBaseProvider.getInstance()
    }
  ],
  exports: [DataBaseProvider]
})
export class DatabaseModule {}
