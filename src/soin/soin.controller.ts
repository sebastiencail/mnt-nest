import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoinService } from './soin.service';
import { CreateSoinDto } from './dto/create-soin.dto';
import { UpdateSoinDto } from './dto/update-soin.dto';

@Controller('soins')
export class SoinController {
  constructor(private readonly soinService: SoinService) {}

  @Post()
  create(@Body() createSoinDto: CreateSoinDto) {
    return this.soinService.create(createSoinDto);
  }

  @Get()
  findAll() {
    return this.soinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoinDto: UpdateSoinDto) {
    return this.soinService.update(+id, updateSoinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soinService.remove(+id);
  }
}
