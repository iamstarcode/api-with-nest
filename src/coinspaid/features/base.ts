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
}
