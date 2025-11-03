import { Email } from './email'
import { UUID } from './uuid'

export class User {
  id: UUID
  email: Email
  name: string
  picture?: string | null

  constructor(
    id: string,
    email: string,
    name: string,
    picture?: string | null
  ) {
    this.id = new UUID(id)
    this.email = new Email(email)
    this.name = name
    this.picture = picture
  }

  static create(data: {
    email: string
    name: string
    id?: string
    picture?: string | null
  }) {
    const userId = data.id ?? UUID.generate()

    return new User(userId, data.name, data.email, data?.picture)
  }

  setPersonalData(email: string, name: string, picture?: string | null) {
    this.email = new Email(email)
    this.name = name
    this.picture = picture

    return this
  }
}
