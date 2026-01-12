import { Module } from '@nestjs/common';
import { SoinService } from './soin.service';
import { SoinController } from './soin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Soin } from './entities/soin.entity';
import { TherapeuteModule } from 'src/therapeute/therapeute.module';

@Module({
  imports: [TypeOrmModule.forFeature([Soin]), TherapeuteModule],
  controllers: [SoinController],
  providers: [SoinService],
})
export class SoinModule {}
