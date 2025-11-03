import { Email } from './email'

export class User {
  id: string
  email: Email
  name: string
  picture?: string | null

  constructor(id: string) {
    this.id = id
  }

  setPersonalData(email: string, name: string, picture?: string | null) {
    this.email = new Email(email)
    this.name = name
    this.picture = picture

    return this
  }
}
