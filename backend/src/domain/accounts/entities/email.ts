export class Email {
  private readonly validDomains = ['gmail']
  private value: string

  constructor(value: string) {
    if (!this.isValidDomain(value)) {
      throw new Error('Invali domain')
    }

    this.value = value
  }

  isValidDomain(value: string) {
    return this.validDomains.includes(value)
  }
}
