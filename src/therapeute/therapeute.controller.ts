import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { TherapeuteService } from './therapeute.service';
import { CreateTherapeuteDto } from './dto/create-therapeute.dto';
import { UpdateTherapeuteDto } from './dto/update-therapeute.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReadTherapeuteDto } from './dto/read-therapeute.dto';
import { plainToInstance } from 'class-transformer';

@Controller('therapeutes')
export class TherapeuteController {
  constructor(private readonly therapeuteService: TherapeuteService) {}

  @Post()
  create(@Body() createTherapeuteDto: CreateTherapeuteDto) {
    return this.therapeuteService.create(createTherapeuteDto);
  }

  @ApiOkResponse({ type: ReadTherapeuteDto })
  @Get()
  findAll() {
    return plainToInstance(ReadTherapeuteDto, this.therapeuteService.findAll());
  }

  @ApiOkResponse({ type: ReadTherapeuteDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    const therapeute = this.therapeuteService.findOne(+id);
    if (!therapeute) {
      throw new NotFoundException();
    }

    return plainToInstance(ReadTherapeuteDto, therapeute);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTherapeuteDto: UpdateTherapeuteDto,
  ) {
    return this.therapeuteService.update(+id, updateTherapeuteDto);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    await this.therapeuteService.delete(id);
    return { message: 'Thérapeute supprimé avec succès' };
  }
}
