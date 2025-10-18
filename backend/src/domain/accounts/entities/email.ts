export class Email {
  private readonly validDomains = ['gmail']

  constructor(private readonly value: string) {}

  isValidDomain() {
    return this.validDomains.includes(this.value)
  }
}
