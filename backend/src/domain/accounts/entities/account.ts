import { AccountStatus } from '../enum'
import { Status } from './status'

export class Account {
  id: string
  createdAt: Date
  status: Status

  constructor(id: string) {
    this.id = id
  }

  static create(id: string) {
    const createdAt = new Date()

    return new Account(id)
      .setStatus(AccountStatus.ACTIVE)
      .setCreatedAt(createdAt)
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
