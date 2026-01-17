import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from './entities/consultation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private readonly consultationRepository: Repository<Consultation>,

    private readonly consultationService: ConsultationService,
  ) {}

  async create(consultationDto: CreateConsultationDto): Promise<Consultation> {
    const therapeute = await this.consultationService.findOne(
      consultationDto.therapeuteId,
    );

    if (!therapeute) {
      throw new NotFoundException('Thérapeute non trouvé');
    }

    const soin = this.consultationRepository.create({
      description: consultationDto.description,
      ordre: consultationDto.ordre,
      therapeute,
    });

    return this.consultationRepository.save(soin);
  }

  async findByTherapeuteId(therapeuteId: number): Promise<Consultation[]> {
    return this.consultationRepository.find({
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
    return this.consultationRepository.find();
  }

  async findOne(id: number): Promise<Consultation | null> {
    return this.consultationRepository.findOne({
      where: { id },
      relations: ['therapeute'],
    });
  }

  async update(id: number, updateConsultationDto: UpdateConsultationDto) {
    const soin = await this.findOne(id);

    if (soin) {
      Object.assign(soin, updateConsultationDto);
      return this.consultationRepository.save(soin);
    }
  }

  async remove(id: number): Promise<void> {
    await this.consultationRepository.delete(id);
  }
}
