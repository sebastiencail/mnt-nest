import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationController } from './consultation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './entities/consultation.entity';
import { TherapeuteModule } from 'src/therapeute/therapeute.module';

@Module({
  imports: [TypeOrmModule.forFeature([Consultation]), TherapeuteModule],
  controllers: [ConsultationController],
  providers: [ConsultationService],
})
export class ConsultationModule {}
