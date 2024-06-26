import axios from 'axios';
import CustomError from '../errors';
/**

 * @class Quidax
 * @param {string} apiKey - The public key of the merchant
 * @param {string} merchant_id - The id of the merchant
 */
class User {
  public baseUrl: string;

  public options: { headers: { Authorization: string } };

  constructor(public apiKey: string) {
    this.baseUrl = 'https://www.quidax.com/api/v1/users';
    this.options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
  }

  public async createSubaccount(
    email: string,
    firstname: string,
    lastname: string,
  ) {
    const body = {
      email,
      firstname,
      lastname,
    };
    try {
      const response = await axios.post(`${this.baseUrl}`, body, this.options);
      const { data } = response;
      if (data?.response?.status > 300) {
        throw Error(data);
      }

      return data;
    } catch (error) {
      // console.log({ error });
      CustomError.processError(error);
    }

    return null;
  }

  public async fetchSubAccount(userId: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/${userId}`,
        this.options,
      );
      const { data } = response;
      if (data?.response?.status > 300) {
        throw Error(data);
      }

      return data;
    } catch (error) {
      // console.log({ error });
      CustomError.processError(error);
    }
    return null;
  }

  public async fetchAllSubAccounts() {
    try {
      const response = await axios.get(`${this.baseUrl}`, this.options);
      return response.data;
    } catch (error) {
      CustomError.processError(error);
    }

    return null;
  }
}

export default User;
