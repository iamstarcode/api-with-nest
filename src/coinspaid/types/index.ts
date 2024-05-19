export interface CurrencyTpe {
  id: number;
  type: string;
  currency: string;
  minimum_amount: string;
  deposit_fee_percent: string;
  withdrawal_fee_percent: string;
  precision: number;
}

export interface IFeatures {
  url: string;
  body: any;
  signature: string;
  processingKey: string;
}
