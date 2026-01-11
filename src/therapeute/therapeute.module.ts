import { Module } from '@nestjs/common';
import { TherapeuteService } from './therapeute.service';
import { TherapeuteController } from './therapeute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Therapeute } from './entities/therapeute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Therapeute])],
  controllers: [TherapeuteController],
  providers: [TherapeuteService],
  exports: [TherapeuteService],
})
export class TherapeuteModule {}
