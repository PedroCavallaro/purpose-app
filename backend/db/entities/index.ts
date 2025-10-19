import { AccountsTable } from './account.entity'
import { PlansTable } from './plan'
import { UsersTable } from './users.entity'

export * from './account.entity'
export * from './users.entity'
export * from './plan'

export interface Database {
  accounts: AccountsTable
  users: UsersTable
  plans: PlansTable
}
