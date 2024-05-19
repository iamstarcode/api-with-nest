import axios from 'axios';
import { TransactionInfoDto } from '../dtos/currencies-dto';
//import { generateSignature } from '../utils/generate-signature';

export class Transactions {
  url: string;
  constructor() {}

  async getTransactionInfo({
    url,
    body,
    signature,
    key,
  }: {
    url: string;
    body: TransactionInfoDto;
    signature: string;
    key: string;
  }) {
    console.log(body, 'xdmcdenj');
    const res = await axios.get(url, {
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': key,
        'X-Processing-Signature': signature,
      },
    });

    return res.data;
  }
}
