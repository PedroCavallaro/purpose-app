import { AccountStatus } from 'src/domain/users/enum'
import { Column, Entity, PrimaryColumn } from 'typeorm'
import { BaseEntity } from './base'

@Entity('accounts')
export class AccountsEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false, unique: true })
  google_id: string

  @Column({ nullable: false, unique: true })
  gateway_id: string

  @Column({ nullable: false, unique: true })
  plan_id: string

  @Column({ nullable: false })
  status: AccountStatus
}
