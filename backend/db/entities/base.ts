import { ColumnType } from 'kysely'

export interface BaseEntity {
  created_at: ColumnType<Date, string | undefined, never>
}
