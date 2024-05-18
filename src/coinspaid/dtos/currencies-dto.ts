import { IsBoolean } from 'class-validator';
export class CurrenciesListDto {
  @IsBoolean()
  visible: boolean;
}
