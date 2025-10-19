import { BaseTable } from './base'

export interface UsersGoalsTable extends BaseTable {
  goal_id: string
  user_id: string
}
