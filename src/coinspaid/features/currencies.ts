//import { IFeatures } from '../types';
import axios from 'axios';
import { Base } from './base';
export class Currencies extends Base {
  constructor({ url, body, signature, processingKey }) {
    super({ url, body, signature, processingKey });
  }
  async getCurrenciesList() {
    const res = await axios(this.url, { method: 'POST', ...this.options });

    if (res.status == 200) {
      return res.data;
    }
    return {
      msg: 'An error occured',
    };
  }
}
