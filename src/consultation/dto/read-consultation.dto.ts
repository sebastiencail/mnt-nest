import { ApiProperty } from '@nestjs/swagger';
import { BaseConsultationDto } from './base-consultation.dto';
import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class ReadConsultationDto extends BaseConsultationDto {
  @ApiProperty()
  @IsInt()
  @Expose()
  id: number;
}
