import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { ReadConsultationDto } from './dto/read-consultation.dto';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

@Controller('consultations')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @ApiOkResponse({ type: ReadConsultationDto })
  @Post()
  create(@Body() createConsultationDto: CreateConsultationDto) {
    return plainToInstance(
      ReadConsultationDto,
      this.consultationService.create(createConsultationDto),
    );
  }

  @ApiOkResponse({ type: ReadConsultationDto, isArray: true })
  @ApiQuery({
    name: 'therapeute',
    required: false, // 👈 facultatif
    type: Number,
    description: 'ID du thérapeute pour filtrer les consultations',
  })
  @Get()
  findConsultations(@Query('therapeute') therapeuteId?: string) {
    let soins;
    if (therapeuteId) {
      soins = this.consultationService.findByTherapeuteId(+therapeuteId);
    } else soins = this.consultationService.findAll();
    return plainToInstance(ReadConsultationDto, soins, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOkResponse({ type: ReadConsultationDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return plainToInstance(
      ReadConsultationDto,
      this.consultationService.findOne(+id),
    );
  }

  @ApiOkResponse({ type: ReadConsultationDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSoinDto: UpdateConsultationDto,
  ) {
    return plainToInstance(
      ReadConsultationDto,
      this.consultationService.update(+id, updateSoinDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultationService.remove(+id);
  }
}
