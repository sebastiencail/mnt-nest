import { Module } from '@nestjs/common';
import { TarifService } from './tarif.service';
import { TarifController } from './tarif.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarif } from './entities/tarif.entity';
import { TherapeuteModule } from 'src/therapeute/therapeute.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tarif]), TherapeuteModule],
  controllers: [TarifController],
  providers: [TarifService],
})
export class TarifModule {}
