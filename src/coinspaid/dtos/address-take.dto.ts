import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class AddressTakeDto {
  @IsString()
  foreign_id: string;

  @IsString()
  currency: string;

  @Optional()
  convert_to: string;

  @Optional()
  tag: string;
}
