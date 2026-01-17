import { Expose } from 'class-transformer';
import { BaseSoinDto } from './base-soin.dto';
import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReadSoinDto extends BaseSoinDto {
  @ApiProperty()
  @IsInt()
  @Expose()
  id: number;
}
