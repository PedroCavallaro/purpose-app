import { AccountSelect, NewAccount } from '../../../../../db/entities'
import { Account, AccountsRepository, User } from '../../../../domain'
import { DB_PROVIDER, DataBaseProvider, Inject } from '../../../../infra'

export class AccountsRepositoryDatabase implements AccountsRepository {
  @Inject(DB_PROVIDER)
  private readonly db: DataBaseProvider

  async getUserAccount(where: AccountSelect): Promise<User | null> {
    console.log('db', this.db)

    const account = await this.db
      .selectFrom('accounts')
      .select(['id', 'email', 'created_at', 'status'])
      .where((eb) =>
        eb.or([eb('id', '=', where.id), eb('email', '=', where?.email)])
      )
      .executeTakeFirst()

    if (!account) return null

    const user = await this.db
      .selectFrom('users')
      .select(['id', 'name', 'picture'])
      .where('account_id', '=', account.id)
      .executeTakeFirst()

    if (!user) return null

    return new User().setPersonalData(account.email, user.name, user.picture)
  }

  async createAccount(account: NewAccount): Promise<Account> {
    throw new Error('')
  }
}
