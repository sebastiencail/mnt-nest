import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapeuteModule } from './therapeute/therapeute.module';
import { TarifModule } from './tarif/tarif.module';
import { SoinModule } from './soin/soin.module';
import { ConsultationModule } from './consultation/consultation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs',
      password: 'nestjspass',
      database: 'nestjsdb',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error'],
    }),
    TherapeuteModule,
    TarifModule,
    SoinModule,
    ConsultationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
