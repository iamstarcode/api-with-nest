import { Module } from '@nestjs/common';
import { QuidaxController } from './quidax.controller';
import { QuidaxService } from './quidax.service';
import { WebhookEvents } from './webook.events';
import { WalletAddressGeneratedHandler } from './handlers/wallet-address-generated.handler';

@Module({
  controllers: [QuidaxController],
  providers: [QuidaxService, WebhookEvents, WalletAddressGeneratedHandler],
  // imports: [WebhookEventEmitter],
})
export class QuidaxModule {}
