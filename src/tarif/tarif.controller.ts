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
import { TarifService } from './tarif.service';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { UpdateTarifDto } from './dto/update-tarif.dto';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ReadTarifDto } from './dto/read-tarif.dto';
import { plainToInstance } from 'class-transformer';

@Controller('tarifs')
export class TarifController {
  constructor(private readonly tarifService: TarifService) {}

  @ApiOkResponse({ type: ReadTarifDto })
  @Post()
  create(@Body() createTarifDto: CreateTarifDto) {
    return plainToInstance(
      ReadTarifDto,
      this.tarifService.create(createTarifDto),
    );
  }

  @ApiOkResponse({ type: ReadTarifDto, isArray: true })
  @ApiQuery({
    name: 'therapeute',
    required: false, // 👈 facultatif
    type: Number,
    description: 'ID du thérapeute pour filtrer les tarifs',
  })
  @Get()
  findTarifs(@Query('therapeute') therapeuteId?: string) {
    let tarifs;
    if (therapeuteId) {
      tarifs = this.tarifService.findByTherapeuteId(+therapeuteId);
    } else tarifs = this.tarifService.findAll();
    return plainToInstance(ReadTarifDto, tarifs, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOkResponse({ type: ReadTarifDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return plainToInstance(ReadTarifDto, this.tarifService.findOne(+id));
  }

  @ApiOkResponse({ type: ReadTarifDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarifDto: UpdateTarifDto) {
    return plainToInstance(
      ReadTarifDto,
      this.tarifService.update(+id, updateTarifDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarifService.remove(+id);
  }
}
