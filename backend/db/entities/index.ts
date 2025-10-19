import { AccountsTable } from './account.entity'
import { GoalsTable } from './goals.entity'
import { PlansTable } from './plans'
import { UsersGoalsTable } from './users-goals'
import { UsersTable } from './users.entity'

export * from './account.entity'
export * from './users.entity'
export * from './goals.entity'
export * from './plans'
export * from './users-goals'

export interface Database {
  accounts: AccountsTable
  users: UsersTable
  plans: PlansTable
  goals: GoalsTable
  users_goals: UsersGoalsTable
}
