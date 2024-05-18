import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuidaxModule } from './quidax/quidax.module';
import { ConfigModule } from '@nestjs/config';
import { CryptoprocessingController } from './cryptoprocessing/cryptoprocessing.controller';
import { CryptoprocessingModule } from './cryptoprocessing/cryptoprocessing.module';

@Module({
  imports: [
    QuidaxModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CryptoprocessingModule,
  ],
  controllers: [AppController, CryptoprocessingController],
  providers: [AppService],
})
export class AppModule {}
