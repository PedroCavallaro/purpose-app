import { ColumnType, Generated } from 'kysely'

export interface BaseTable {
  id: Generated<string>
  created_at: ColumnType<Date, string | undefined, never>
  deleted_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}
