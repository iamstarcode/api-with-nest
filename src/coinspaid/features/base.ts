import axios from 'axios';
import { IFeatures } from '../types';

export class Base {
  url: string;
  body: any;
  signature: string;
  processingKey: string;
  options: any;
  constructor({ url, body, signature, processingKey }: IFeatures) {
    this.url = url;
    this.body = body;
    this.signature = signature;
    this.processingKey = processingKey;
    this.options = {
      data: body,
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': processingKey,
        'X-Processing-Signature': signature,
      },
    };
  }

  async addressTake() {
    const res = await axios(this.url, { method: 'POST', ...this.options });

    if (res.status == 200) {
      return res.data;
    }
    return {
      msg: 'An error occured',
    };
  }
}
