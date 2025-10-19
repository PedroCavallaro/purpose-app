import { Selectable } from 'kysely'
import { PlanTags } from 'src/domain/plans'
import { BaseTable } from './base'

export interface PlansTable extends BaseTable {
  name: string
  description: string
  tag: PlanTags
}

export type PlansSelect = Selectable<PlansTable>
