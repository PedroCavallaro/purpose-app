import { Goal, GoalType } from 'src/domain'
import { DataBaseProvider } from 'src/infra'

export class GoalRepository {
  constructor(private readonly db: DataBaseProvider) {}

  async createGoal(goal: Goal, type: GoalType) {
    const id = await this.db.insertInto('goals').values({
      description: goal.description,
      type: type
    })

    return id
  }
}
