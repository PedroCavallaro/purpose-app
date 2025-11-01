import { Email } from './email'

export class User {
  userId: string
  email: Email
  name: string
  picture?: string | null

  setPersonalData(email: string, name: string, picture?: string | null) {
    this.email = new Email(email)
    this.name = name
    this.picture = picture

    return this
  }
}
