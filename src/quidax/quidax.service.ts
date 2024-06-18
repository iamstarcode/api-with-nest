import { Injectable, Req } from '@nestjs/common';
import { API_BASE_URL } from './constants';
import { ConfigService } from '@nestjs/config';
import { Wallets } from './features/wallets';
import { Markets } from './features/market';
import * as crypto from 'crypto';

import { Request } from 'express';

@Injectable()
export class QuidaxService {
  baseURL: string;
  options: { headers: { Authorization?: string; 'Content-Type': string } };

  constructor(private readonly configService: ConfigService) {
    this.baseURL = API_BASE_URL;
    this.options = {
      headers: {
        //Authorization: '',
        'Content-Type': 'application/json',
      },
    };
  }
  generateAddres() {
    return { msg: 'Address generated' };
  }

  async getMarkets() {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await fetch(`${this.baseURL}/markets`, options);
      const data = await res.json();
      return { data };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUserWallets() {
    const wallets = new Wallets({
      apiSecreteKey: this.configService.get('QUIDAX_SECRTETE_KEY'),
    });
    const data = await wallets.getUserWallets();
    return data;
  }

  async getCurrencyMartketTicker(currency: string) {
    const markets = new Markets({
      apiSecreteKey: this.configService.get('QUIDAX_SECRTETE_KEY'),
    });

    const data = await markets.getCurrencyMarketTicker(currency);
    return data;
  }

  async isWebhookSignatureValid(@Req() req: Request) {
    const quidaxSignatureHeader: string = req.headers[
      'quidax-signature'
    ] as string;

    //
    const [timestampSection, signatureSection] =
      quidaxSignatureHeader.split('=');

    const [timestampPrefix, timestamp] = timestampSection.split('=');

    const [signaturePrefix, signature] = signatureSection.split('=');

    const requestBody = JSON.stringify(req.body);

    const payload = `${timestamp}.${requestBody}`;

    const created_signature = crypto
      .createHmac('sha256', this.configService.get('QUIDAX_SECRET_KEY'))
      .update(payload)
      .digest()
      .toString('hex');

    if (signature === created_signature) {
      return true;
    }

    return false;
  }
}
