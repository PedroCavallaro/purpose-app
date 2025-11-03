import { Logger } from 'kysely'
import { TOKEN_STRATEGY } from '../..'
import { CreateAccountDTO, TokenStrategy, UseCase } from '../../../../domain'
import { Inject, LOGGER } from '../../../../infra'

interface Output {
  token: string
}

export class LoginUseCase extends UseCase<CreateAccountDTO, Output> {
  @Inject(LOGGER)
  private readonly logger: Logger
  @Inject(TOKEN_STRATEGY)
  private readonly tokenStrategy: TokenStrategy

  protected override async _execute(input: CreateAccountDTO): Promise<Output> {
    return {
      token: 'a'
    }
  }
}
