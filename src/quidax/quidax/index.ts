// import User from "./features/user";
/* import Wallets from "./features/wallets";
import Market from "./features/market";
import Orders from "./features/orders";
import Withdrawals from "./features/withdrawals";
import Deposits from "./features/deposits";
import Swap from "./features/swap"; */

import User from './features/user';

class Quidax {
  apiKey: string;

  user: User;

  /*   wallets: Wallets;

  market: Market;

  orders: Orders;

  withdrawals: Withdrawals;

  deposits: Deposits;

  swap: Swap; */

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.user = new User(this.apiKey);
    /* this.wallets = new Wallets(this.api_key);
    this.market = new Market(this.api_key);
    this.orders = new Orders(this.api_key);
    this.withdrawals = new Withdrawals(this.api_key);
    this.deposits = new Deposits(this.api_key);
    this.swap = new Swap(this.api_key); */
  }
}
export default Quidax;

// testing
