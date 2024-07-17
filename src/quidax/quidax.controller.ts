import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import Quidax from '@iamstarcode/quidax-js';
import { QuidaxService } from './quidax.service';
import { ConfigService } from '@nestjs/config';

import { Request } from 'express';

// import Quidax from 'quidax-package'; // Typescript

import { WebhookEvents } from './webook.events';
// import Quidax from './quidax';

@Controller('quidax')
export class QuidaxController {
  quidax: Quidax;
  constructor(
    private readonly quidaxService: QuidaxService,
    private readonly configService: ConfigService,
    readonly webhookEvents: WebhookEvents,
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
    return await this.quidax.markets.getMarketTickers();
  }

  @Get('markets/tickers/:currency')
  @HttpCode(HttpStatus.OK)
  async getMarketsTickers(@Param('currency') currency: string) {
    return await this.quidax.markets.getMarketTicker(currency);
  }

  //Walets
  @Get('user/wallets')
  @HttpCode(HttpStatus.OK)
  async getUserWallets() {
    //  return await this.quidax.wallets.fetch_all_user_wallets('me');

    return {};
    // return await this.quidaxService.getUserWallets();
  }

  @Get('users/:userId')
  @HttpCode(HttpStatus.OK)
  async fetchSubaccounts(@Param('userId') userId: string) {
    //  return await this.quidax.wallets.fetch_all_user_wallets('me');
    /*  const data = await this.quidax.user.fetchSubAccount(userId);

    return data;
 */
    // return await this.quidaxService.getUserWallets();
  }

  @Post('users/')
  @HttpCode(HttpStatus.OK)
  async createSubaccounts(@Body() body: any) {
    console.log(body, 'mvkmrkvmkr');
    //  return await this.quidax.wallets.fetch_all_user_wallets('me');
    // const data = await this.quidax.user.fetchSubAccount(userId);
    /* const data = await this.quidax.user.createSubaccount(
      body.email,
      body.first_name,
      body.last_name,
    );

    console.log(data, 'bhbhbfh');
    return data; */
    // return {};
    // return await this.quidaxService.getUserWallets();
  }
  /* 
  @Get('user/wallets/:id/:currency')
  @HttpCode(HttpStatus.OK)
  async fetchCurrencyWallets(
    @Param('id') id: string,
    @Param('currency') currency: string,
  ) {
    // const data = await this.quidax.wallets.fetch_user_wallet(id, currency);

    return {};
  } */

  @Post('webhook')
  @HttpCode(HttpStatus.ACCEPTED)
  async handleWebookEvents(@Req() request: Request) {
    const event = request.body.event;
    const data = request.body.data;

    const signatureValide =
      await this.quidaxService.isWebhookSignatureValid(request);
    if (signatureValide) {
      this.webhookEvents.emitEvent(event, data);
      return { msg: 'Webhook Recieved' };
    }
    return { msg: 'Signature Invalid' };
  }
}
