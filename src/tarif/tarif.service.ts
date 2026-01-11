import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { UpdateTarifDto } from './dto/update-tarif.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarif } from './entities/tarif.entity';
import { Repository } from 'typeorm';
import { Therapeute } from 'src/therapeute/entities/therapeute.entity';
import { ReadTarifDto } from './dto/read-tarif.dto';
import { TherapeuteService } from 'src/therapeute/therapeute.service';

@Injectable()
export class TarifService {
  constructor(
    @InjectRepository(Tarif)
    private readonly tarifRepository: Repository<Tarif>,

    private readonly therapeuteService: TherapeuteService,
  ) {}

  async create(createTarifDto: CreateTarifDto): Promise<Tarif> {
    const therapeute = await this.therapeuteService.findOne(
      createTarifDto.therapeuteId,
    );

    if (!therapeute) {
      throw new NotFoundException('Thérapeute non trouvé');
    }

    const tarif = this.tarifRepository.create({
      description: createTarifDto.description,
      prix: createTarifDto.prix,
      ordre: createTarifDto.ordre,
      therapeute,
    });

    return this.tarifRepository.save(tarif);
  }

  async findByTherapeuteId(therapeuteId: number): Promise<Tarif[]> {
    return this.tarifRepository.find({
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
    return this.tarifRepository.find();
  }

  async findOne(id: number): Promise<Tarif | null> {
    return this.tarifRepository.findOne({
      where: { id },
      relations: ['therapeute'],
    });
  }

  async update(id: number, updateTarifDto: UpdateTarifDto) {
    const tarif = await this.findOne(id);

    if (tarif) {
      Object.assign(tarif, updateTarifDto);
      return this.tarifRepository.save(tarif);
    }
  }

  async remove(id: number): Promise<void> {
    await this.tarifRepository.delete(id);
  }
}
