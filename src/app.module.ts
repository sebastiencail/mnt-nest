import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapeuteModule } from './therapeute/therapeute.module';
import { TarifModule } from './tarif/tarif.module';
import { SoinModule } from './soin/soin.module';
import { ConsultationModule } from './consultation/consultation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Rend le module accessible partout
      envFilePath: '.env', // Chemin du fichier .env
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'postgres'>('DB_TYPE'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        logging: ['query', 'error'],
      }),
      inject: [ConfigService],
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
