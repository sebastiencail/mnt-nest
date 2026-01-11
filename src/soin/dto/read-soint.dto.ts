import { Expose } from 'class-transformer';
import { SoinBaseDto } from './soin-base.dto';
import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReadSoinDto extends SoinBaseDto {
  @ApiProperty()
  @IsInt()
  @Expose()
  id: number;
}
