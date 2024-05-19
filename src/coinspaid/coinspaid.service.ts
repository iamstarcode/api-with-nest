import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//import { Currencies } from './features/currencies';
import * as crypto from 'crypto';
import { CurrenciesListDto, TransactionInfoDto } from './dtos/currencies-dto';
import { Transactions } from './features/transactions';
//import { Currencies } from './features/currencies';

@Injectable()
export class CoinspaidService {
  baseURL: string;
  optioins: RequestInit;
  headers: RequestInit['headers'];
  constructor(private readonly configService: ConfigService) {
    this.baseURL =
      this.configService.get('NODE_ENV') == 'development'
        ? this.configService.get('COINPAID_DEV_URL')
        : this.configService.get('COINPAID_URL');
  }
  async addressTake() {
    //const res = await fetch("dcdc",{headers:{}})
    /*  const res = await fetch(`${apiURL}/currencies/list`, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': process.env.COINPAID_KEY!,
        'X-Processing-Signature': generateSignature(
          requestBody,
          process.env.COINPAID_SECRET_KEY!,
        ),
      },
    }); */
  }

  async currenciesList(currenciesListDto: CurrenciesListDto) {
    //console.log(typeof currenciesListDto, 'gkgkgkmtkgmk');
    const url = `${this.baseURL}/currencies/list`;
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(currenciesListDto),
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': process.env.COINPAID_KEY!,
        'X-Processing-Signature': this.generateSignature(currenciesListDto),
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data.data;
  }

  async transactionInfo(transactionInfoDto: TransactionInfoDto) {
    const url = `${this.baseURL}/transactions/info`;

    const transactions = new Transactions();
    const transactionsInfo = transactions.getTransactionInfo({
      url,
      body: transactionInfoDto,
      key: this.configService.get('COINPAID_KEY'),
      signature: this.generateSignature(transactionInfoDto),
    });

    return await transactionsInfo;
  }

  private generateSignature(requestBody: any) {
    const signature = crypto
      .createHmac('sha512', this.configService.get('COINPAID_SECRET_KEY'))
      .update(JSON.stringify(requestBody))
      .digest('hex');

    return signature;
  }
}
