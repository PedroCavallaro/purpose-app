import { AccountSelect, NewAccount } from 'db/entities'
import { Account, User } from '../entities'

export interface AccountsRepository {
  getUserAccount(where?: AccountSelect): Promise<User | null>
  createAccount(account: NewAccount): Promise<Account>
}
