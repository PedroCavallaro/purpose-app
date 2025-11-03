import { randomUUID } from 'crypto'

export class UUID {
  value: string

  constructor(id?: string) {
    this.value = id ?? randomUUID()
  }

  static generate() {
    return randomUUID()
  }

  getValue() {
    return this.value
  }
}
