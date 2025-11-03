import { User } from 'src/domain/accounts'
import { AuthToken } from '../entities'
import { TokenData } from '../entities/token-data'

export interface TokenStrategy {
  generate(data: User): AuthToken
  validate(token: string): TokenData
}
