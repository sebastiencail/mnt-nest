import { Test, TestingModule } from '@nestjs/testing';
import { SoinController } from './soin.controller';
import { SoinService } from './soin.service';

describe('SoinController', () => {
  let controller: SoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoinController],
      providers: [SoinService],
    }).compile();

    controller = module.get<SoinController>(SoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
