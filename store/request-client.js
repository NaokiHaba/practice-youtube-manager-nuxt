// AxiosをラップしてHTTPSリクエストを実行する
export class RequestClient {
  constructor(axios) {
    this.axios = axios
  }

  async get(uri, params = {}) {
    // query=hoge&query2=fuga のような文字列を作成
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const query = queryString.length > 0 ? `${uri}?${queryString}` : uri
    return await this.axios.$get(query)
  }

}

export function createRequestClient(axios,) {
  return new RequestClient(axios)
}
