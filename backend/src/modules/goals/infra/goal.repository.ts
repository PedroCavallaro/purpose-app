import { NewGoal } from '../../../../db/entities'
import { Goal } from '../../../domain'
import { DataBaseProvider } from '../../../infra'

export class GoalRepository {
  constructor(private readonly db: DataBaseProvider) {}

  async createGoal(goal: NewGoal, userId: string): Promise<Goal> {
    const newGoal = await this.db.transaction().execute(async (trx) => {
      const newGoal = await trx
        .insertInto('goals')
        .values({
          description: goal.description,
          type: goal.type
        })
        .returningAll()
        .executeTakeFirstOrThrow()

      await trx
        .insertInto('users_goals')
        .values({
          goal_id: newGoal.id,
          user_id: userId
        })
        .execute()

      return newGoal
    })

    return new Goal(newGoal.id, newGoal.description, false)
  }
}
