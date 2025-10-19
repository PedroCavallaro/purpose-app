import { Selectable } from 'kysely'
import { PlanTags } from 'src/domain/plans'
import { BaseEntity } from './base'

export interface PlansTable extends BaseEntity {
  id: string
  name: string
  description: string
  tag: PlanTags
}

export type PlansSelect = Selectable<PlansTable>
