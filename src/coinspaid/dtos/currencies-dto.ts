import { IsBoolean, IsNumber } from 'class-validator';
export class CurrenciesListDto {
  @IsBoolean()
  visible: boolean;
}

export class TransactionInfoDto {
  @IsNumber()
  id: number;
}
