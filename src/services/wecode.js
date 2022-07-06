import axios from 'axios';

export default class HttpClient {
  baseURL = '';
  httpClient = null;

  constructor(baseURL) {
    this.baseURL = baseURL;
    this.httpClient = axios.create({
      baseURL: baseURL,
    });
  }

  async getData(url) {
    const data = await this.httpClient.get(url);
    return data;
  }
}
