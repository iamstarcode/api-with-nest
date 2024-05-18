import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CoinspaidService } from './coinspaid.service';
import { CurrenciesListDto } from './dtos/currencies-dto';
import { CurrencyTpe } from './types';

@Controller('coinspaid')
export class CoinspaidController {
  constructor(private readonly coinspaidService: CoinspaidService) {}
  @Post('address-take')
  async addressTake() {}

  @Post('currencies/list')
  @HttpCode(HttpStatus.OK)
  async getCurrenciesList(
    @Body() currenciesListDto: CurrenciesListDto,
  ): Promise<CurrencyTpe[]> {
    return await this.coinspaidService.currenciesList(currenciesListDto);
  }
}
