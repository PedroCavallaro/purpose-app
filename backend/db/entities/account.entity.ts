import { Insertable, Selectable, Updateable } from 'kysely'
import { AccountStatus } from 'src/domain/accounts/enum'
import { BaseTable } from './base'

export interface AccountsTable extends BaseTable {
  email: string
  google_id: string
  gateway_id: string
  plan_id: string
  status: AccountStatus
}

export type AccountSelect = Selectable<AccountsTable>
export type NewAccount = Insertable<AccountsTable>
export type AccountUpdate = Updateable<AccountsTable>
