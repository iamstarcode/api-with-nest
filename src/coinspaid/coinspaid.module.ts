import { Module } from '@nestjs/common';
import { CoinspaidService } from './coinspaid.service';
import { CoinspaidController } from './coinspaid.controller';

@Module({
  providers: [CoinspaidService],
  controllers: [CoinspaidController]
})
export class CoinspaidModule {}
