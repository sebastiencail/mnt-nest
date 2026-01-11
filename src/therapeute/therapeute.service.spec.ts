import { Test, TestingModule } from '@nestjs/testing';
import { TherapeuteService } from './therapeute.service';

describe('TherapeuteService', () => {
  let service: TherapeuteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TherapeuteService],
    }).compile();

    service = module.get<TherapeuteService>(TherapeuteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
