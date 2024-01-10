import { Test, TestingModule } from '@nestjs/testing';
import { KiaCustomersController } from './kia-customers.controller';
import { KiaCustomersService } from './kia-customers.service';

describe('KiaCustomersController', () => {
  let controller: KiaCustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KiaCustomersController],
      providers: [KiaCustomersService],
    }).compile();

    controller = module.get<KiaCustomersController>(KiaCustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
