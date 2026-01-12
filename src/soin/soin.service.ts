import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSoinDto } from './dto/create-soin.dto';
import { UpdateSoinDto } from './dto/update-soin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Soin } from './entities/soin.entity';
import { Repository } from 'typeorm';
import { TherapeuteService } from 'src/therapeute/therapeute.service';

@Injectable()
export class SoinService {
  constructor(
    @InjectRepository(Soin)
    private readonly soinRepository: Repository<Soin>,

    private readonly therapeuteService: TherapeuteService,
  ) {}

  async create(soinDto: CreateSoinDto): Promise<Soin> {
    const therapeute = await this.therapeuteService.findOne(
      soinDto.therapeuteId,
    );

    if (!therapeute) {
      throw new NotFoundException('Thérapeute non trouvé');
    }

    const soin = this.soinRepository.create({
      description: soinDto.description,
      ordre: soinDto.ordre,
      therapeute,
    });

    return this.soinRepository.save(soin);
  }

  async findByTherapeuteId(therapeuteId: number): Promise<Soin[]> {
    return this.soinRepository.find({
      where: {
        therapeute: {
          id: therapeuteId,
        },
      },
      relations: ['therapeute'],
      order: {
        ordre: 'ASC',
      },
    });
  }

  findAll() {
    return this.soinRepository.find();
  }

  async findOne(id: number): Promise<Soin | null> {
    return this.soinRepository.findOne({
      where: { id },
      relations: ['therapeute'],
    });
  }

  async update(id: number, updateSoinDto: UpdateSoinDto) {
    const soin = await this.findOne(id);

    if (soin) {
      Object.assign(soin, updateSoinDto);
      return this.soinRepository.save(soin);
    }
  }

  async remove(id: number): Promise<void> {
    await this.soinRepository.delete(id);
  }
}
