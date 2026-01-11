import { Injectable } from '@nestjs/common';
import { CreateSoinDto } from './dto/create-soin.dto';
import { UpdateSoinDto } from './dto/update-soin.dto';

@Injectable()
export class SoinService {
  create(createSoinDto: CreateSoinDto) {
    return 'This action adds a new soin';
  }

  findAll() {
    return `This action returns all soin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soin`;
  }

  update(id: number, updateSoinDto: UpdateSoinDto) {
    return `This action updates a #${id} soin`;
  }

  remove(id: number) {
    return `This action removes a #${id} soin`;
  }
}
