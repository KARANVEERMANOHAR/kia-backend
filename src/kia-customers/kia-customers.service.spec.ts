import { Test, TestingModule } from '@nestjs/testing';
import { KiaCustomersService } from './kia-customers.service';

describe('KiaCustomersService', () => {
  let service: KiaCustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KiaCustomersService],
    }).compile();

    service = module.get<KiaCustomersService>(KiaCustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
