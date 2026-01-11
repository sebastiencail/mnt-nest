import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTherapeuteDto } from './dto/create-therapeute.dto';
import { UpdateTherapeuteDto } from './dto/update-therapeute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Therapeute } from './entities/therapeute.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TherapeuteService {
  constructor(
    @InjectRepository(Therapeute)
    private therapeutesRepository: Repository<Therapeute>,
  ) {}

  async create(createTherapeuteDto: CreateTherapeuteDto) {
    const therapeute = this.therapeutesRepository.create(createTherapeuteDto);
    return this.therapeutesRepository.save(therapeute);
  }

  async findAll() {
    return this.therapeutesRepository.find();
  }

  async findOne(id: number): Promise<Therapeute | null> {
    return this.therapeutesRepository.findOneBy({ id });
  }

  async update(id: number, updateTherapeuteDto: UpdateTherapeuteDto) {
    const therapeute = await this.findOne(id);

    if (therapeute) {
      Object.assign(therapeute, updateTherapeuteDto);
      return this.therapeutesRepository.save(therapeute);
    }
  }

  async delete(id: number) {
    const therapeute = await this.findOne(id);
    if (!therapeute) {
      throw new NotFoundException(`Thérapeute avec l'id ${id} introuvable`);
    } else {
      return this.therapeutesRepository.delete(id);
    }
  }
}
