import { Goal } from './goal'

export class FutureGoal extends Goal {
  completionDate: Date

  constructor(
    id: string,
    description: string,
    completionDate: Date,
    completed: boolean
  ) {
    super(id, description, completed)

    this.completionDate = completionDate
  }

  isCompletionDay() {
    const now = new Date()

    return now == this.completionDate
  }

  daysUntilCompletion() {
    const now = Date.now()
    const diffInMs = this.completionDate.getTime() - now
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

    return diffInDays
  }
}
