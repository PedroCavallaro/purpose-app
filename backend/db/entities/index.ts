import { AccountsTable } from './account.entity'
import { UsersTable } from './users.entity'

export * from './account.entity'
export * from './users.entity'

export interface Database {
  accounts: AccountsTable
  users: UsersTable
}
