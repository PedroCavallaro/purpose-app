export class AppError {
  status: number
  message: string
  details?: Record<string, any>

  constructor(status: number, message: string, details?: Record<string, any>) {
    this.status = status
    this.message = message
    this.details = details ?? undefined
  }
}
