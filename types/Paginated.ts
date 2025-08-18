export interface Paginated<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
}
