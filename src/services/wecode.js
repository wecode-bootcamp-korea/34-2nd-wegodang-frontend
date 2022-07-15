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

  async getData(url, params = {}) {
    const data = await this.httpClient.get(url, { params });
    return data;
  }

  async postData(url, body = {}) {
    const data = await this.httpClient.post(url, body);
    return data;
  }
}
