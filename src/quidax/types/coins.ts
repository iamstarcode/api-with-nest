interface Functionality {
  buySell: boolean;
  sendReceive: boolean;
  network?: string; // Optional network information
}

interface Currency {
  currency: string;
  supportedNetworks: string[];
  quoteTicker: string[];
  features: string;
  multipleAddress: boolean;
  canBuy?: boolean;
  canSell?: boolean;
  canReceive?: boolean;
}

const coins: { [symbol: string]: Currency } = {
  btc: {
    currency: 'Bitcoin',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['btc'],
    features: 'Create multiple wallet addresses, Buy, Sell, Send, and Receive',
    multipleAddress: true,
  },
  ltc: {
    currency: 'Litecoin',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['ltc'],
    features: 'Create multiple wallet addresses, Buy, Sell, Send, and Receive',
    multipleAddress: true,
  },
  dash: {
    currency: 'Dash',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['dash'],
    features: 'Create multiple wallet addresses, Buy, Sell, Send, and Receive',
    multipleAddress: true,
  },
  trx: {
    currency: 'Tron',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['trc20'],
    features: 'Buy, Sell, Send, and Receive, Create a single wallet address',
    multipleAddress: false,
  },
  qdx: {
    currency: 'Quidax Token',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['bep20'],
    features: 'Buy, Sell, Send, and Receive, Create a single wallet address',
    multipleAddress: true,
  },
  eth: {
    currency: 'Ethereum',
    supportedNetworks: ['usdt', 'ngn'],
    blockchain: 'erc20, bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  xrp: {
    currency: 'Ripple',
    supportedNetworks: ['usdt', 'ngn'],
    blockchain: 'ripple',
    features: 'Create wallet addresses, Buy, Sell, Send, and Receive',
  },
  bch: {
    currency: 'Bitcoin Cash',
    supportedNetworks: ['usdt'],
    blockchain: 'bch',
    features: 'Create wallet addresses, Buy, Sell, Send, and Receive',
  },
  sol: {
    currency: 'Solana',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  mana: {
    currency: 'Decentraland (MANA)',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ftm: {
    currency: 'Fantom (FTM)',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },

  sand: {
    currency: 'The Sandbox',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  floki: {
    currency: 'Floki Inu',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  xtz: {
    currency: 'Tezos',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  one: {
    currency: 'Harmony',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  ada: {
    currency: 'Cardano',
    supportedNetworks: ['usdt'],
    blockchain: 'cardano',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  babydoge: {
    currency: 'Babydoge',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  fil: {
    currency: 'Filecoin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  axs: {
    currency: 'Axie Infinity',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  xlm: {
    currency: 'Stellar',
    supportedNetworks: ['usdt'],
    blockchain: 'stellar',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  cake: {
    currency: 'PancakeSwap',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  link: {
    currency: 'Chainlink',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  dot: {
    currency: 'Polkadot',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  shib: {
    currency: 'Shiba Inu',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  aave: {
    currency: 'Aave',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  usdc: {
    currency: 'USD Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20, erc20, trc20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  matic: {
    currency: 'Polygon',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20, erc20, trc20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  bnb: {
    currency: 'Binance Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Send, and Receive, Create a single wallet address per blockchain',
  },
  doge: {
    currency: 'Dogecoin',
    supportedNetworks: ['usdt'],
    blockchain: 'doge',
    features:
      'Create wallet addresses, Buy, Sell, Send, and Receive per blockchain',
  },
  usdt: {
    currency: 'Tether',
    supportedNetworks: ['ngn'],
    blockchain: 'bep20, erc20, trc20',
    features:
      'Buy, Sell, Send, and Receive. Create a single wallet address per blockchain',
  },
  meme: {
    currency: 'Memecoin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },

  cnhc: {
    currency: 'CNHC Token',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },

  cfx: {
    currency: 'Conflux',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ape: {
    currency: 'Apecoin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  pepe: {
    currency: 'Pepecoin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  enj: {
    currency: 'Enjin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  lrc: {
    currency: 'Loopring',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  wld: {
    currency: 'Worldcoin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  arb: {
    currency: 'Arbitrum',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  algo: {
    currency: 'Algorand',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ens: {
    currency: 'Ethereum Name Service',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ordi: {
    currency: 'Ordinals',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  meme: {
    currency: 'MEME Coin (MEME)',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  bonk: {
    currency: 'Bonk Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  sui: {
    currency: 'Sui Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ordi: {
    currency: 'Ordi Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  ens: {
    currency: 'Ethereum Name Service',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  algo: {
    currency: 'Algorand Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  arb: {
    currency: 'Arbitrum Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  wif: {
    currency: 'Dogwifhat Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  myro: {
    currency: 'Myro Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  trump: {
    currency: 'MAGA',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  cob: {
    currency: 'Cobra King',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  virtual: {
    currency: 'Virtual Protocol',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  nos: {
    currency: 'Nosana Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  lpt: {
    currency: 'Livepeer Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  jup: {
    currency: 'Jupiter Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  blur: {
    currency: 'Blur Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  kata: {
    currency: 'Katana Inu Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  op: {
    currency: 'Optimism Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  naka: {
    currency: 'Nakamoto Games Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },

  naka: {
    currency: 'Nakamoto Games Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  icp: {
    currency: 'Internet Computer Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  kas: {
    currency: 'Kaspa Coin',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  coq: {
    currency: 'Coq Inu',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  jto: {
    currency: 'Jito',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  wassie: {
    currency: 'WASSIE',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
  fet: {
    currency: 'Fetch.ai',
    supportedNetworks: ['usdt'],
    blockchain: 'bep20',
    features:
      'Buy, Sell, Cannot Send or Receive, Can not create wallet address',
  },
};

//coins['btc'];
export { coins };
