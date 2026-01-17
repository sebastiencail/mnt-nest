import { ApiProperty } from '@nestjs/swagger';
import { BaseTherapeuteDto } from './base-therapeute.dto';

export class ReadTherapeuteDto extends BaseTherapeuteDto {
  @ApiProperty()
  id: number;
}
