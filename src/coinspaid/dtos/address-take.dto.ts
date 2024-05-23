import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class AddressTakeDto {
  @IsString()
  foriegnId: string;

  @IsString()
  currency: string;

  @Optional()
  convertTo: string;
}
