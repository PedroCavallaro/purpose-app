import { LOGIN, TOKEN_STRATEGY } from '.'
import { JwtTokenStrategy } from '../../domain'
import { LoginUseCase } from './usecases'

export const authModule = {
  [TOKEN_STRATEGY]: new JwtTokenStrategy(),
  [LOGIN]: new LoginUseCase()
}
