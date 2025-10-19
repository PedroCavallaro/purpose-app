import { Kysely, sql } from 'kysely'
import { AccountStatus, GoalType, PlanTags } from 'src/domain'

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
    .createType('goal_type')
    .asEnum([GoalType.DAILY, GoalType.FUTURE])
    .execute()

  db.schema
    .createTable('plans')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('description', 'varchar', (col) => col.notNull())
    .addColumn('tag', sql`plan_tag not null`)
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
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
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
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

  db.schema
    .createTable('goals')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('description', 'varchar')
    .addColumn('completion_date', 'timestamp')
    .addColumn('type', sql`goal_type not null`)
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute()

  db.schema
    .createTable('users_goals')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('goal_id', 'serial', (col) =>
      col.references('goals.id').notNull()
    )
    .addColumn('user_id', 'serial', (col) =>
      col.references('users.id').notNull()
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropType('plan_tag').execute()
  db.schema.dropType('account_status').execute()
  db.schema.dropType('goal_type').execute()
  db.schema.dropTable('users_goals').execute()
  db.schema.dropTable('goals').execute()
  db.schema.dropTable('users').execute()
  db.schema.dropTable('accounts').execute()
  db.schema.dropTable('plans').execute()
}
