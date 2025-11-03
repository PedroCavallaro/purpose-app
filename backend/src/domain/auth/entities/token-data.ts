export class TokenData {
  sub: number
  email: string
  picture?: string
  name: string

  constructor(sub: number, email: string, name: string, picture?: string) {
    this.sub = sub
    this.email = email
    this.name = name
    this.picture = picture
  }
}
