export class PaginationDTO<T> {
  page: number
  limit: number
  data: T

  constructor(page: number, limit: number, data: T) {
    this.data = data
    this.page = page
    this.limit = limit
  }
}
