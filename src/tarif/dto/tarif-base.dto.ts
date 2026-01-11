import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TarifBaseDto {
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional() // <-- ignore si absent
  @Transform(({ value }) => (value === '' ? null : value))
  prix: string;

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
