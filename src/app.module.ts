import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuidaxModule } from './quidax/quidax.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuidaxModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
