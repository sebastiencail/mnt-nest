import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BaseSoinDto {
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @Expose()
  @IsInt()
  ordre: number;

  @ApiProperty()
  @Expose()
  @IsInt()
  @IsOptional()
  therapeuteId: number;
}
