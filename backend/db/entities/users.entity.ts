import { Insertable, Selectable, Updateable } from 'kysely'
import { BaseEntity } from './base'

export interface UsersTable extends BaseEntity {
  id: string
  name: string
  picture: string | null
  account_id: string
  completion_days: number
}

export type UserSelect = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UserUpdate = Updateable<UsersTable>
