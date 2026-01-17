import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseTherapeuteDto } from './base-therapeute.dto';

export class CreateTherapeuteDto extends BaseTherapeuteDto {}
