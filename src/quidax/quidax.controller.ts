import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { QuidaxService } from './quidax.service';
// const Quidax = require('quidax-node-api');
import { ConfigService } from '@nestjs/config';

import Quidax from 'quidax-package'; // Typescript

@Controller('quidax')
export class QuidaxController {
  quidax: Quidax;
  constructor(
    private readonly quidaxService: QuidaxService,
    private readonly configService: ConfigService,
  ) {
    this.quidax = new Quidax(this.configService.get('QUIDAX_SECRET_KEY'));
  }
  @Get('generate-address')
  generateAddress() {
    return this.quidaxService.generateAddres();
  }

  @Get('markets')
  @HttpCode(HttpStatus.OK)
  async getMarkets() {
    return await this.quidaxService.getMarkets();
  }

  @Get('markets/tickers/:currency')
  @HttpCode(HttpStatus.OK)
  async getMarketsTickers(@Param('currency') currency: string) {
    return await this.quidaxService.getCurrencyMartketTicker(currency);
  }

  //Walets
  @Get('user/wallets')
  @HttpCode(HttpStatus.OK)
  async getUserWallets() {
    return await this.quidax.wallets.fetch_all_user_wallets('me');

    // return await this.quidaxService.getUserWallets();
  }

  @Get('user/wallets/:id/:currency')
  @HttpCode(HttpStatus.OK)
  async fetchCurrencyWallets(
    @Param('id') id: string,
    @Param('currency') currency: string,
  ) {
    const data = await this.quidax.wallets.fetch_user_wallet(id, currency);
    return data;
  }
}
