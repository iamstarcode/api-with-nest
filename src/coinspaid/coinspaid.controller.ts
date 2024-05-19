import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CoinspaidService } from './coinspaid.service';
import { CurrenciesListDto } from './dtos/currencies-dto';
import { ConfigService } from '@nestjs/config';

@Controller('coinspaid')
export class CoinspaidController {
  constructor(
    private readonly coinspaidService: CoinspaidService,
    private readonly configService: ConfigService,
  ) {}
  @Post('address-take')
  async addressTake() {}

  @Post('currencies/list')
  @HttpCode(HttpStatus.OK)
  async getCurrenciesList(@Body() currenciesListDto: CurrenciesListDto) {
    return await this.coinspaidService.currenciesList(currenciesListDto);
  }

  //Transactions
  @Get('/transactions/info/:id')
  @HttpCode(HttpStatus.OK)
  async getTransactionInfo(@Param('id', ParseIntPipe) id: number) {
    return await this.coinspaidService.transactionInfo(id);
  }
  async handleCallabacks() {}
}
