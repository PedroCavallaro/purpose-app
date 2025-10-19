import { Insertable } from 'kysely'
import { GoalType } from 'src/domain'
import { BaseTable } from './base'

export interface GoalsTable extends BaseTable {
  description: string
  type: GoalType
  completion_date?: Date | null
}

export type NewGoal = Insertable<GoalsTable>
