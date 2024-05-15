import { Injectable, NotFoundException } from '@nestjs/common';
import { API_BASE_URL } from './constants';
import { ConfigService } from '@nestjs/config';

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
}
