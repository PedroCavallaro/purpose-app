import pino from 'pino'
import { Logger } from './logger'

export class PinoLogger implements Logger {
  private readonly logger = pino({})

  log(message: string, context?: string): void {
    this.logger.info({ context }, message)
  }

  verbose(message: string, context?: string): void {
    this.logger.trace({ context }, message)
  }

  warn(message: string, context?: string): void {
    this.logger.warn({ context }, message)
  }

  debug(message: string, context?: string): void {
    this.logger.debug({ context }, message)
  }

  error(message: string, trace?: string, context?: string): void {
    this.logger.error({ context, trace }, message)
  }
}
