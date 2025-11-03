import jwt from 'jsonwebtoken'
import { env } from '../../../env'
import { User } from '../../accounts'
import { AuthToken, TokenData } from '../entities'
import { TokenStrategy } from './token.strategy'

export class JwtTokenStrategy implements TokenStrategy {
  generate(data: User): AuthToken {
    const token = jwt.sign(
      {
        sub: data.id,
        email: data.email
      },
      env.jwt.secret,
      {
        expiresIn: env.jwt.expiresIn
      }
    )

    return new AuthToken(token)
  }

  validate(token: string): TokenData {
    const data = jwt.verify(token, 'asdad')

    if (typeof data === 'string') {
      throw new Error(data)
    }

    const payload = data

    return new TokenData(
      Number(payload!.sub),
      payload.email,
      payload.name,
      payload.picture
    )
  }
}
