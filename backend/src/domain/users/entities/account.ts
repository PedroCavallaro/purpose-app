import { AccountStatus } from '../enum'
import { Status } from './status'

export class Account {
  id: string
  createdAt: Date
  status: Status

  constructor(id: string) {
    this.id = id
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt

    return this
  }

  setStatus(status: AccountStatus) {
    this.status = new Status(status)

    return this
  }
}
