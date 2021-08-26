import { Test, TestingModule } from '@nestjs/testing';
import { HeroGrpcController } from './hero-grpc.controller';

describe('HeroGrpcController', () => {
  let controller: HeroGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroGrpcController],
    }).compile();

    controller = module.get<HeroGrpcController>(HeroGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
