import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class WalletAddressGeneratedHandler {
  @OnEvent('wallet.address.generated')
  handleEvent(payload: any) {
    console.log('Wallet Address Generated:', payload);
    // Your logic to handle the wallet address generated event
    const { user, address, currency } = payload;
    console.log(
      `New ${currency} address generated for user ${user.email}: ${address}`,
    );
    // Add your database save logic here
  }
}
