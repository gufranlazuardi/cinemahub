export interface Response {
  results: ResponseResult;
  page: number;
  total_pages: number;
  total_result: number;
}

export interface ResponseResult {
  id: number;
  adult: boolean;
}
