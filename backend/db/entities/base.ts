import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
