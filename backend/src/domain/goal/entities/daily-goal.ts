import { Goal } from './goal'

export class DailyGoal extends Goal {
  completionDate: Date

  constructor(id: string, description: string, completed: boolean) {
    super(id, description, completed)

    this.completionDate = new Date()
  }
}
