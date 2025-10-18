import { PlanTags } from '../enums'

export class Plan {
  id: string
  price: number
  tag: PlanTags
  description: string

  constructor(id: string, price: number, tag: PlanTags, description: string) {
    this.id = id
    this.price = price
    this.tag = tag
    this.description = description
  }
}
