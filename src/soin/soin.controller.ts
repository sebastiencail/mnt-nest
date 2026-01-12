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
import { SoinService } from './soin.service';
import { CreateSoinDto } from './dto/create-soin.dto';
import { UpdateSoinDto } from './dto/update-soin.dto';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ReadSoinDto } from './dto/read-soint.dto';
import { plainToInstance } from 'class-transformer';

@Controller('soins')
export class SoinController {
  constructor(private readonly soinService: SoinService) {}

  @ApiOkResponse({ type: ReadSoinDto })
  @Post()
  create(@Body() createSoinDto: CreateSoinDto) {
    return plainToInstance(ReadSoinDto, this.soinService.create(createSoinDto));
  }

  @ApiOkResponse({ type: ReadSoinDto, isArray: true })
  @ApiQuery({
    name: 'therapeute',
    required: false, // 👈 facultatif
    type: Number,
    description: 'ID du thérapeute pour filtrer les soins',
  })
  @Get()
  findTarifs(@Query('therapeute') therapeuteId?: string) {
    let soins;
    if (therapeuteId) {
      soins = this.soinService.findByTherapeuteId(+therapeuteId);
    } else soins = this.soinService.findAll();
    return plainToInstance(ReadSoinDto, soins, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOkResponse({ type: ReadSoinDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return plainToInstance(ReadSoinDto, this.soinService.findOne(+id));
  }

  @ApiOkResponse({ type: ReadSoinDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoinDto: UpdateSoinDto) {
    return plainToInstance(
      ReadSoinDto,
      this.soinService.update(+id, updateSoinDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soinService.remove(+id);
  }
}
