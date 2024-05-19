import axios from 'axios';
import { TransactionInfoDto } from '../dtos/currencies-dto';
//import { generateSignature } from '../utils/generate-signature';

interface ITransactions {
  url: string;
  body: any;
  signature: string;
  processingKey: string;
}
export class Transactions {
  url: string;
  body: any;
  signature: string;
  processingKey: string;
  options: any;
  constructor({ url, body, signature, processingKey }: ITransactions) {
    this.url = url;
    this.body = body;
    this.signature = signature;
    this.processingKey = processingKey;

    this.options = {
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': processingKey,
        'X-Processing-Signature': signature,
      },
    };
  }

  async getTransactionInfo() {
    const res = await axios.get(this.url, this.options);
    return res.data;
  }
}
