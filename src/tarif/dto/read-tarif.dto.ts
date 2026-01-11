import { ApiProperty } from '@nestjs/swagger';
import { TarifBaseDto } from './tarif-base.dto';
import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class ReadTarifDto extends TarifBaseDto {
  @ApiProperty()
  @IsInt()
  @Expose()
  id: number;
}
