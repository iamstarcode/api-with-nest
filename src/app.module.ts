import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuidaxModule } from './quidax/quidax.module';
import { ConfigModule } from '@nestjs/config';

import { EventEmitterModule } from '@nestjs/event-emitter';

import { CoinspaidModule } from './coinspaid/coinspaid.module';

@Module({
  imports: [
    QuidaxModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EventEmitterModule.forRoot(),
    CoinspaidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
