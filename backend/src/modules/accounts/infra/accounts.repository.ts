import { Injectable } from '@nestjs/common'
import { AccountSelect, NewAccount } from 'db/entities'
import { Account, User } from 'src/domain'
import { DataBaseProvider } from 'src/infra'

@Injectable()
export class AccountsRepository {
  constructor(private readonly pool: DataBaseProvider) {}

  async getAccount(where: AccountSelect): Promise<User | null> {
    const account = await this.pool
      .selectFrom('accounts')
      .select(['id', 'email', 'created_at', 'status'])
      .where((eb) =>
        eb.or([eb('id', '=', where.id), eb('email', '=', where?.email)])
      )
      .executeTakeFirst()

    if (!account) return null

    const user = await this.pool
      .selectFrom('users')
      .select(['id', 'name', 'picture'])
      .where('account_id', '=', account.id)
      .executeTakeFirst()

    if (!user) return null

    return new User()
      .setPersonalData(account.email, user.name, user.picture)
      .setAccount(
        new Account(account.id)
          .setCreatedAt(account.created_at)
          .setStatus(account.status)
      )
  }

  async createAccount(account: NewAccount) {}
}
