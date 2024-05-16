import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { QuidaxService } from './quidax.service';

@Controller('quidax')
export class QuidaxController {
  constructor(private readonly quidaxService: QuidaxService) {}
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
    return await this.quidaxService.getUserWallets();
  }
}
