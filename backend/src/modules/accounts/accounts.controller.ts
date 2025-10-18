import { Controller, Get } from '@nestjs/common'

@Controller('accounts')
export class AccountsController {
  constructor() {}

  @Get()
  async getUser() {
    return 'hi'
  }
}
