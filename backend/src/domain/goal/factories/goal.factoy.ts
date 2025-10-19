import { Goal } from '../entities'
import { DailyGoal } from '../entities/daily-goal'
import { FutureGoal } from '../entities/future-goal'

export class GoalFactory {
  getFutureGoal(goal: Goal, completionDate: Date) {
    return new FutureGoal(
      goal.id,
      goal.description,
      completionDate,
      goal.completed
    )
  }

  getDailyGoal(goal: Goal) {
    return new DailyGoal(goal.id, goal.description, goal.completed)
  }
}
