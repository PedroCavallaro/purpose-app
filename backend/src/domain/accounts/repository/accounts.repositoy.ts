import { AccountSelect } from '../../../../db/entities'
import { Account, User } from '../entities'

export interface AccountsRepository {
  getUserAccount(
    where?: AccountSelect
  ): Promise<{ user: User; account: Account } | null>
  createAccount(account: Account): Promise<Account>
}
