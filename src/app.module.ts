import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuidaxModule } from './quidax/quidax.module';
import { ConfigModule } from '@nestjs/config';

import { CoinspaidModule } from './coinspaid/coinspaid.module';

@Module({
  imports: [
    QuidaxModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CoinspaidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
