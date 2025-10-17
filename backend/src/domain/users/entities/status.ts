import { AccountStatus } from '../enum/account-status.enum'

export class Status {
  constructor(private value: AccountStatus) {}

  setStatus(status: AccountStatus) {
    this.value = status
  }

  isActive() {
    return this.value === AccountStatus.ACTIVE
  }

  isPending() {
    return this.value === AccountStatus.PENDENCY
  }

  isCancelled() {
    return this.value === AccountStatus.CANCELLED
  }
}
