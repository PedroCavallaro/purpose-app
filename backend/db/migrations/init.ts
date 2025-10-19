import { Kysely, sql } from 'kysely'
import { AccountStatus, PlanTags } from 'src/domain'

export async function up(db: Kysely<any>): Promise<void> {
  db.schema.createType('plan_tag').asEnum([PlanTags.FREE]).execute()
  db.schema
    .createType('account_status')
    .asEnum([
      AccountStatus.ACTIVE,
      AccountStatus.PENDENCY,
      AccountStatus.CANCELLED
    ])
    .execute()

  db.schema
    .createTable('plans')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('description', 'varchar', (col) => col.notNull())
    .addColumn('tag', sql`plan_tag not null`)
    .execute()

  db.schema
    .createTable('accounts')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('email', 'varchar', (col) => col.notNull())
    .addColumn('google_id', 'varchar', (col) => col.notNull())
    .addColumn('gateway_id', 'varchar', (col) => col.notNull())
    .addColumn('status', sql`account_status not null`)
    .addColumn('plan_id', 'serial', (col) =>
      col.references('plans.id').notNull()
    )
    .execute()

  db.schema
    .createTable('users')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('picture', 'varchar')
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
    .addColumn('account_id', 'serial', (col) =>
      col.references('accounts.id').notNull()
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropType('plan_tag')
  db.schema.dropType('account_status')
  db.schema.dropTable('users').execute()
  db.schema.dropTable('accounts').execute()
  db.schema.dropTable('plans').execute()
}
