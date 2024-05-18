import { Module } from '@nestjs/common';
import { CryptoprocessingService } from './cryptoprocessing.service';
import { CryptoprocessingController } from './cryptoprocessing.controller';

@Module({
  providers: [CryptoprocessingService],
  controllers: [CryptoprocessingController]
})
export class CryptoprocessingModule {}
