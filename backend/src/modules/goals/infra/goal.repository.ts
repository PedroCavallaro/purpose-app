import { NewGoal } from 'db/entities'
import { Goal } from 'src/domain'
import { DataBaseProvider } from 'src/infra'

export class GoalRepository {
  constructor(private readonly db: DataBaseProvider) {}

  async createGoal(goal: NewGoal, userId: string) {
    const newGoal = await this.db
      .insertInto('goals')
      .values({
        description: goal.description,
        type: goal.type
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    await this.db
      .insertInto('users_goals')
      .values({
        goal_id: newGoal.id,
        user_id: userId
      })
      .execute()

    return new Goal(newGoal.id, newGoal.description, false)
  }
}
