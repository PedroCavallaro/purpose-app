export abstract class UseCase<I, O> {
  public async execute(input: I): Promise<O | void> {
    try {
      const res = await this._execute(input)

      return res
    } catch (error) {
      this.onError(error)
    }
  }

  protected _execute(input: I): O | Promise<O> {
    throw new Error('Method not implemented')
  }

  protected onError(error: unknown) {
    throw new Error('Method not implemented')
  }
}
