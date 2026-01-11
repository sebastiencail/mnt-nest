import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { TherapeuteBaseDto } from './therapeute-base.dto';

export class CreateTherapeuteDto extends TherapeuteBaseDto {}
