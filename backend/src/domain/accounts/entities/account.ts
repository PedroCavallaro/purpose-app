import { AccountStatus } from '../enum'
import { Status } from './status'
import { User } from './user'
import { UUID } from './uuid'

export class Account {
  id: UUID
  createdAt: Date
  status: Status
  user: User

  constructor(id: string, status: AccountStatus, createdAt: Date, user: User) {
    this.id = new UUID(id)
    this.status = new Status(status)
    this.createdAt = createdAt
    this.user = user
  }

  static create(data: {
    id?: string
    status: AccountStatus
    createdAt: Date
    user: User
  }) {
    const accountId = data?.id ?? UUID.generate()
    return new Account(accountId, data.status, data.createdAt, data.user)
  }
}
