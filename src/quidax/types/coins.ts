interface Currency {
  currency: string;
  supportedNetworks: string[];
  quoteTicker: string[];
  features?: string;
  multipleAddress: boolean | null;
  canBuy?: boolean;
  canSell?: boolean;
  canReceive?: boolean;
}

const coins: { [symbol: string]: Currency } = {
  btc: {
    currency: 'Bitcoin',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['btc'],
    multipleAddress: true,
  },
  ltc: {
    currency: 'Litecoin',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['ltc'],
    multipleAddress: true,
  },
  dash: {
    currency: 'Dash',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['dash'],
    multipleAddress: true,
  },
  trx: {
    currency: 'Tron',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['trc20'],
    multipleAddress: false,
  },
  qdx: {
    currency: 'Quidax Token',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  eth: {
    currency: 'Ethereum',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['erc20', ' bep20'],
    multipleAddress: false,
  },
  xrp: {
    currency: 'Ripple',
    quoteTicker: ['usdt', 'ngn'],
    supportedNetworks: ['ripple'],
    multipleAddress: true,
  },
  bch: {
    currency: 'Bitcoin Cash',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bch'],
    multipleAddress: true,
  },
  sol: {
    currency: 'Solana',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  mana: {
    currency: 'Decentraland (MANA)',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  ftm: {
    currency: 'Fantom (FTM)',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  sand: {
    currency: 'The Sandbox',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  floki: {
    currency: 'Floki Inu',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  xtz: {
    currency: 'Tezos',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  one: {
    currency: 'Harmony',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  ada: {
    currency: 'Cardano',
    quoteTicker: ['usdt'],
    supportedNetworks: ['cardano'],
    multipleAddress: false,
  },
  babydoge: {
    currency: 'Babydoge',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  fil: {
    currency: 'Filecoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  axs: {
    currency: 'Axie Infinity',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  xlm: {
    currency: 'Stellar',
    quoteTicker: ['usdt'],
    supportedNetworks: ['stellar'],
    multipleAddress: false,
  },
  cake: {
    currency: 'PancakeSwap',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  link: {
    currency: 'Chainlink',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  dot: {
    currency: 'Polkadot',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  shib: {
    currency: 'Shiba Inu',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  aave: {
    currency: 'Aave',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  usdc: {
    currency: 'USD Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20', 'erc20', 'trc20'],
    multipleAddress: false,
  },
  matic: {
    currency: 'Polygon',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20', 'erc20', 'trc20'],
    multipleAddress: false,
  },
  bnb: {
    currency: 'Binance Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: false,
  },
  doge: {
    currency: 'Dogecoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['doge'],
    multipleAddress: true,
  },
  usdt: {
    currency: 'Tether',
    quoteTicker: ['ngn'],
    supportedNetworks: ['bep20', 'erc20', 'trc20'],
    multipleAddress: false,
  },
  meme: {
    currency: 'Memecoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  cnhc: {
    currency: 'CNHC Token',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  cfx: {
    currency: 'Conflux',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  ape: {
    currency: 'Apecoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  pepe: {
    currency: 'Pepecoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  enj: {
    currency: 'Enjin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  lrc: {
    currency: 'Loopring',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  wld: {
    currency: 'Worldcoin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  arb: {
    currency: 'Arbitrum',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  algo: {
    currency: 'Algorand',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  ens: {
    currency: 'Ethereum Name Service',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  bonk: {
    currency: 'Bonk Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  sui: {
    currency: 'Sui Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  ordi: {
    currency: 'Ordi Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  wif: {
    currency: 'Dogwifhat Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  myro: {
    currency: 'Myro Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  trump: {
    currency: 'MAGA',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  cob: {
    currency: 'Cobra King',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  virtual: {
    currency: 'Virtual Protocol',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  nos: {
    currency: 'Nosana Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  lpt: {
    currency: 'Livepeer Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  jup: {
    currency: 'Jupiter Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  blur: {
    currency: 'Blur Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  kata: {
    currency: 'Katana Inu Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  op: {
    currency: 'Optimism Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  naka: {
    currency: 'Nakamoto Games Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },

  icp: {
    currency: 'Internet Computer Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  kas: {
    currency: 'Kaspa Coin',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  coq: {
    currency: 'Coq Inu',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  jto: {
    currency: 'Jito',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  wassie: {
    currency: 'WASSIE',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
  fet: {
    currency: 'Fetch.ai',
    quoteTicker: ['usdt'],
    supportedNetworks: ['bep20'],
    multipleAddress: null,
  },
};

//coins['btc'];
export { coins };
