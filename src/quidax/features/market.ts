import { API_BASE_URL } from '../constants';

export class Markets {
  baseURL: any;
  options: RequestInit;
  constructor({ apiSecreteKey }: { apiSecreteKey: string }) {
    this.baseURL = API_BASE_URL;
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiSecreteKey}`,
      },
    };
  }
  async getCurrencyMarketTicker(currency: string) {
    const res = await fetch(
      `${this.baseURL}/markets/tickers/${currency}`,
      this.options,
    );
    const data = await res.json();
    return data;
  }
}
