import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
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
}
