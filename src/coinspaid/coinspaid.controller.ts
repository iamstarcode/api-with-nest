import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CoinspaidService } from './coinspaid.service';
import { CurrenciesListDto, TransactionInfoDto } from './dtos/currencies-dto';
import { CurrencyTpe } from './types';
import { ConfigService } from '@nestjs/config';

import * as crypto from 'crypto';

@Controller('coinspaid')
export class CoinspaidController {
  options: RequestInit;
  url: string;
  constructor(
    private readonly coinspaidService: CoinspaidService,
    private readonly configService: ConfigService,
  ) {
    this.url =
      this.configService.get('NODE_ENV') == 'development'
        ? this.configService.get('COINPAID_DEV_URL')
        : this.configService.get('COINPAID_URL');
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': this.configService.get('COINPAID_URL'),
      },
    };
  }
  @Post('address-take')
  async addressTake() {}

  @Post('currencies/list')
  @HttpCode(HttpStatus.OK)
  async getCurrenciesList(
    @Body() currenciesListDto: CurrenciesListDto,
  ): Promise<CurrencyTpe[]> {
    return await this.coinspaidService.currenciesList(currenciesListDto);
  }

  //Transactions
  @Post('/transactions/info')
  @HttpCode(HttpStatus.OK)
  async getTransactionInfo(@Body() transactionInfoDto: TransactionInfoDto) {
    this.url = `${this.url}/transactions/info`;
    this.options = {
      method: 'POST',
      headers: {
        ...this.options.headers,
        'X-Processing-Signature': this.generateSignature(transactionInfoDto),
      },
    };

    return await this.coinspaidService.transactionInfo(transactionInfoDto);
  }
  async handleCallabacks() {}

  private generateSignature(requestBody: any) {
    const signature = crypto
      .createHmac('sha512', this.configService.get('COINPAID_SECRET_KEY'))
      .update(JSON.stringify(requestBody))
      .digest('hex');

    return signature;
  }
}
