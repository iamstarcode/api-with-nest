import { API_BASE_URL } from '../constants';

export class Wallets {
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
  async getUserWallets() {
    const res = await fetch(`${this.baseURL}/users/me/wallets`, this.options);
    const data = await res.json();
    return data;
  }
}
