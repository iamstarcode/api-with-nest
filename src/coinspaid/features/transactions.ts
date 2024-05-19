import axios, { AxiosRequestConfig } from 'axios';
//import { generateSignature } from '../utils/generate-signature';
import { Base } from './base';
export class Transactions extends Base {
  url: string;
  body: any;
  signature: string;
  processingKey: string;
  options: AxiosRequestConfig;
  constructor({ url, body, signature, processingKey }) {
    super({ url, body, signature, processingKey });
  }

  async getTransactionInfo() {
    const res = await axios.get(this.url, this.options);
    return res.data;
  }
}
