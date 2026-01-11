import { Module } from '@nestjs/common';
import { SoinService } from './soin.service';
import { SoinController } from './soin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Soin } from './entities/soin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Soin])],
  controllers: [SoinController],
  providers: [SoinService],
})
export class SoinModule {}
