import { Module } from '@nestjs/common';
import { QuidaxController } from './quidax.controller';
import { QuidaxService } from './quidax.service';

@Module({
  controllers: [QuidaxController],
  providers: [QuidaxService],
})
export class QuidaxModule {}
