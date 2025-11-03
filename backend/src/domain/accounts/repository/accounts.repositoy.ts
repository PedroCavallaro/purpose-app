import { AccountSelect } from '../../../../db/entities'
import { Account } from '../entities'

export interface AccountsRepository {
  getUserAccount(where?: AccountSelect): Promise<Account | null>
  createAccount(account: Account): Promise<Account>
}
