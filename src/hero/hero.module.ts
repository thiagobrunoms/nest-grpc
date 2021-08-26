import { Module } from '@nestjs/common';
import { HeroGrpcController } from './hero-grpc/hero-grpc.controller';

@Module({
  controllers: [HeroGrpcController]
})
export class HeroModule {}
