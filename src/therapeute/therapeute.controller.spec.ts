import { Test, TestingModule } from '@nestjs/testing';
import { TherapeuteController } from './therapeute.controller';
import { TherapeuteService } from './therapeute.service';

describe('TherapeuteController', () => {
  let controller: TherapeuteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TherapeuteController],
      providers: [TherapeuteService],
    }).compile();

    controller = module.get<TherapeuteController>(TherapeuteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
