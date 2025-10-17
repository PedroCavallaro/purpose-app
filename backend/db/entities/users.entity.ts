import { Column, PrimaryColumn } from 'typeorm'
import { BaseEntity } from './base'

export class UsersEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: true })
  picture: string

  @Column({ nullable: false })
  account_id: string

  @Column({ nullable: false })
  completion_days: number
}
