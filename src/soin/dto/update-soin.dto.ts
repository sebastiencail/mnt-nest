import { PartialType } from '@nestjs/mapped-types';
import { CreateSoinDto } from './create-soin.dto';

export class UpdateSoinDto extends PartialType(CreateSoinDto) {}
