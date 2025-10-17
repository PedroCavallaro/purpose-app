import { Account } from './account'
import { Email } from './email'

export class User {
  userId: string
  email: Email
  name: string
  picture: string
  account: Account

  setPersonalData(email: string, name: string, picture: string) {
    this.email = new Email(email)
    this.name = name
    this.picture = picture

    return this
  }

  setAccount(acccount: Account) {
    this.account = new Account(createdAt, status)

    return this
  }
}
