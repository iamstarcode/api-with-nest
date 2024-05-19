import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//import { Currencies } from './features/currencies';
import * as crypto from 'crypto';
import { CurrenciesListDto } from './dtos/currencies-dto';
import { Transactions } from './features/transactions';
import { Currencies } from './features/currencies';
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
    const currencies = new Currencies({
      url: `${this.baseURL}/currencies/list`,
      body: currenciesListDto,
      processingKey: this.configService.get('COINPAID_KEY'),
      signature: this.generateSignature(currenciesListDto),
    });

    const data = await currencies.getCurrenciesList();
    return data;
  }

  async transactionInfo(id: number) {
    const transactions = new Transactions({
      url: `${this.baseURL}/transactions/info`,
      body: { id },
      processingKey: this.configService.get('COINPAID_KEY'),
      signature: this.generateSignature({ id }),
    });
    const transactionsInfo = await transactions.getTransactionInfo();

    return transactionsInfo;
  }

  private generateSignature(requestBody: any) {
    const signature = crypto
      .createHmac('sha512', this.configService.get('COINPAID_SECRET_KEY'))
      .update(JSON.stringify(requestBody))
      .digest('hex');

    return signature;
  }
}
