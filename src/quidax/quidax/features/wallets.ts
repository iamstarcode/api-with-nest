import axios from 'axios';
import CustomError from '../errors';
/**
 * The quidax module for handling all quidax related operations.
 * @class Quidax
 * @param {string} apiKey - The public key of the merchant
 */

class Wallets {
  public baseUrl: string;

  public options: { headers: { Authorization: string } };

  constructor(public apiKey: string) {
    this.baseUrl = 'https://www.quidax.com/api/v1';
    this.options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
  }

  public async createPaymentAddress(
    userId: string,
    currency: string,
    network?: any,
  ) {
    try {
      let url: string;

      if (network === undefined) {
        url = `${this.baseUrl}/users/${userId}/wallets/${currency}/addresses`;
      } else {
        url = `${this.baseUrl}/users/${userId}/wallets/${currency}/addresses?network=${network}`;
      }

      const response = await axios.post(url, null, this.options);

      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }
  }

  /*   public async fetch_payment_address(userId: string, currency: string) {
    try {
      const response = await axios.get(
        `${this.base_url}/users/${userId}/wallets/${currency}/address`,
        this.options,
      );
      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }
  }

  public async fetch_payment_addresses(userId: string, currency: string) {
    try {
      const response = await axios.get(
        `${this.base_url}/users/${userId}/wallets/${currency}/addresses`,
        this.options,
      );
      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }
  }

  public async fetch_user_wallet(userId: string, currency: string) {
    try {
      const response = await axios.get(
        `${this.base_url}/users/${userId}/wallets/${currency}`,
        this.options,
      );
      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }
  }

  public async fetch_all_user_wallets(userId: string) {
    try {
      const response = await axios.get(
        `${this.base_url}/users/${userId}/wallets`,
        this.options,
      );
      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }
  } */
}

export default Wallets;
