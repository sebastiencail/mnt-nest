import { ApiProperty } from '@nestjs/swagger';
import { TherapeuteBaseDto } from './therapeute-base.dto';

export class ReadTherapeuteDto extends TherapeuteBaseDto {
  @ApiProperty()
  id: number;
}
