import { Test, TestingModule } from '@nestjs/testing';
import { SoinService } from './soin.service';

describe('SoinService', () => {
  let service: SoinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoinService],
    }).compile();

    service = module.get<SoinService>(SoinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
