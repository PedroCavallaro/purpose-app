import { Insertable, Selectable, Updateable } from 'kysely'
import { BaseTable } from './base'

export interface UsersTable extends BaseTable {
  name: string
  picture: string | null
  account_id: string
  completion_days: number
}

export type UserSelect = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UserUpdate = Updateable<UsersTable>
