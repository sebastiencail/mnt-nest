import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class TherapeuteBaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  specialites: string;

  @IsString()
  @Length(10, 14)
  @IsNotEmpty()
  @ApiProperty()
  telPortable: string;

  @IsEmail()
  @IsOptional() // <-- ignore si absent
  @Transform(({ value }) => (value === '' ? null : value))
  @ApiPropertyOptional() // <-- Swagger montre comme optionnel
  email: string;

  @IsUrl()
  @IsOptional() // <-- ignore si absent
  @Transform(({ value }) => (value === '' ? null : value))
  @ApiPropertyOptional() // <-- Swagger montre comme optionnel
  siteWeb?: string; // <-- TypeScript : facultatif
}
