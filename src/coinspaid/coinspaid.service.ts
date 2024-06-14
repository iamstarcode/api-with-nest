import { Body, Injectable, Req, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { CurrenciesListDto } from './dtos/currencies-dto';
import { Currencies } from './features/currencies';
import { AddressTakeDto } from './dtos/address-take.dto';

import { Request } from 'express';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class CoinspaidService {
  baseURL: string;
  optioins: RequestInit;
  //headers: RequestInit['headers'];
  constructor(private readonly configService: ConfigService) {
    this.baseURL =
      this.configService.get('NODE_ENV') == 'development'
        ? this.configService.get('COINPAID_DEV_URL')
        : this.configService.get('COINPAID_URL');
  }
  async addressTake(
    @Body() createAddressDto: AddressTakeDto,
    @Req() request: Request,
  ) {
    return await this.handleRequest({
      dto: createAddressDto,
      request,
      url: `${this.baseURL}/addresses/take`,
    });
  }

  async currenciesList(currenciesListDto: CurrenciesListDto) {
    const currencies = new Currencies({
      url: `${this.baseURL}/currencies/list`,
      body: currenciesListDto,
      processingKey: this.configService.get('COINPAID_KEY'),
      signature: this.generateSignature(currenciesListDto),
    });

    const data = await currencies.getCurrenciesList();
    return data;
  }

  async transactionInfo(id: number, @Req() request: Request) {
    const obj = {
      dto: { id },
      request,
      url: `${this.baseURL}/transactions/info`,
    };
    return await this.handleRequest(obj);
    //return data;
  }

  //Helpers
  private generateSignature(requestBody: any) {
    const signature = crypto
      .createHmac('sha512', this.configService.get('COINPAID_SECRET_KEY'))
      .update(JSON.stringify(requestBody))
      .digest('hex');

    return signature;
  }

  private async handleRequest({
    dto,
    request,
    url,
  }: {
    dto: any;
    request?: Request;
    url: string;
  }) {
    const httpMethod = request.method;
    const options: AxiosRequestConfig = {
      data: dto,
      headers: {
        'Content-Type': 'application/json',
        'X-Processing-Key': this.configService.get('COINPAID_KEY'),
        'X-Processing-Signature': this.generateSignature(dto),
      },
    };

    let response: AxiosResponse;
    if (httpMethod === 'POST') {
      try {
        response = await axios(url, { method: 'POST', ...options });
      } catch (error) {
        this.handleAxiosError(error);
      }
    } else if (httpMethod === 'GET') {
      try {
        response = await axios.get(url, options);
      } catch (error) {
        this.handleAxiosError(error);
      }
    }

    return response.data;
  }
  //Probation to move out of her
  private handleAxiosError(error: any): void {
    if (error.response) {
      // Server responded with a status code other than 2xx
      throw new HttpException(
        {
          status: error.response.status,
          error: error.response.data,
        },
        error.response.status,
      );
    } else if (error.request) {
      // No response received from server
      throw new HttpException('No response received from server', 504);
    } else {
      // Something happened in setting up the request
      throw new HttpException(error.message, 500);
    }
  }
}
