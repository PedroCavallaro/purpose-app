import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AccountsEntity, UsersEntity } from 'db/entities'
import { Account, User } from 'src/domain'
import { Repository } from 'typeorm'

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(AccountsEntity)
    private readonly accountRepository: Repository<AccountsEntity>,
    @InjectRepository(UsersEntity)
    private readonly usersRepositoy: Repository<UsersEntity>
  ) {}

  async getUser(where: { email?: string; id?: string }): Promise<User | null> {
    const account = await this.accountRepository.findOne({
      where: {
        email: where?.email,
        id: where?.id
      }
    })

    if (!account) return null

    const user = await this.usersRepositoy.findOne({
      where: {
        account_id: account.id
      }
    })

    if (!user) return null

    return new User()
      .setPersonalData(account.email, user.name, user.picture)
      .setAccount(
        new Account(account.id)
          .setCreatedAt(account.created_at)
          .setStatus(account.status)
      )
  }
}
