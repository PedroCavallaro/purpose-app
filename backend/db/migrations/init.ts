import { Kysely, sql } from 'kysely'
import { AccountStatus } from 'src/domain'
import { PlanTags } from 'src/domain/plans'

export async function up(db: Kysely<any>): Promise<void> {
  db.schema
    .createTable('plans')
    .addColumn('id', 'varchar(35)', (col) => col.primaryKey())
    .addColumn('name', 'varchar(255)', (col) => col.notNull())
    .addColumn('description', 'varchar(255)', (col) => col.notNull())
    .addColumn('tag', sql`enum(${PlanTags.FREE})`)
    .execute()

  db.schema
    .createTable('accounts')
    .addColumn('id', 'varchar(35)', (col) => col.primaryKey())
    .addColumn('email', 'varchar(255)', (col) => col.notNull())
    .addColumn('google_id', 'varchar(255)', (col) => col.notNull())
    .addColumn('gateway_id', 'varchar(255)', (col) => col.notNull())
    .addColumn(
      'status',
      sql`enum(${AccountStatus.ACTIVE}, ${AccountStatus.PENDENCY}, ${AccountStatus.CANCELLED})`
    )
    .addColumn('plan_id', 'varchar(255)', (col) =>
      col.references('plans.id').notNull()
    )
    .execute()

  db.schema
    .createTable('users')
    .addColumn('id', 'varchar(35)', (col) => col.primaryKey())
    .addColumn('name', 'varchar(255)', (col) => col.notNull())
    .addColumn('picture', 'varchar(255)')
    .addColumn('completion_days', 'int2')
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('account_id', 'varchar(35)', (col) =>
      col.references('accounts.id').notNull()
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('users').execute()
  db.schema.dropTable('accounts').execute()
  db.schema.dropTable('plans').execute()
}
