import { AccountSelect } from '../../../../../db/entities'
import { Account, AccountsRepository, User } from '../../../../domain'
import { DataBaseProvider } from '../../../../infra'

export class AccountsRepositoryDatabase implements AccountsRepository {
  constructor(private readonly db: DataBaseProvider) {}

  async getUserAccount(
    where: AccountSelect
  ): Promise<{ user: User; account: Account } | null> {
    const account = await this.db
      .selectFrom('accounts')
      .select(['id', 'email', 'created_at', 'status'])
      .where((eb) =>
        eb.or([eb('id', '=', where?.id), eb('email', '=', where?.email)])
      )
      .executeTakeFirst()

    if (!account) return null

    const user = await this.db
      .selectFrom('users')
      .select(['id', 'name', 'picture'])
      .where('account_id', '=', account.id)
      .executeTakeFirst()

    if (!user) return null

    return {
      user: new User(user.id).setPersonalData(
        account.email,
        user.name,
        user.picture
      ),
      account: new Account(account.id)
        .setStatus(account.status)
        .setCreatedAt(account.created_at)
    }
  }

  async createAccount(account: Account): Promise<Account> {
    throw new Error('')
  }
}
