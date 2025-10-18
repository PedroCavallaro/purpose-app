import { Account } from './account'
import { Email } from './email'

export class User {
  userId: string
  email: Email
  name: string
  picture?: string | null
  account: Account

  setPersonalData(email: string, name: string, picture?: string | null) {
    this.email = new Email(email)
    this.name = name
    this.picture = picture

    return this
  }

  setAccount(account: Account) {
    this.account = account

    return this
  }
}
