import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { CoinspaidService } from './coinspaid.service';
import { CurrenciesListDto } from './dtos/currencies-dto';
import { ConfigService } from '@nestjs/config';
import { AddressTakeDto } from './dtos/address-take.dto';

import { Request } from 'express';

@Controller('coinspaid')
export class CoinspaidController {
  constructor(private readonly coinspaidService: CoinspaidService) {}
  @Post('addresses/take')
  async addressTake(
    @Body() addressTakeDto: AddressTakeDto,
    @Req() request: Request,
  ) {
    return await this.coinspaidService.handleRequest({
      dto: addressTakeDto,
      request,
      url: 'addresses/take',
    });
  }

  @Post('currencies/list')
  @HttpCode(HttpStatus.OK)
  async getCurrenciesList(@Body() currenciesListDto: CurrenciesListDto) {
    return await this.coinspaidService.currenciesList(currenciesListDto);
  }

  //Transactions
  @Get('/transactions/info/:id')
  @HttpCode(HttpStatus.OK)
  async getTransactionInfo(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: Request,
  ) {
    return await this.coinspaidService.transactionInfo(id, request);
  }
  async handleCallabacks() {}
}
