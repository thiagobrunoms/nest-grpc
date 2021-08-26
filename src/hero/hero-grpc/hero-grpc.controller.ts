import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('hero-grpc')
export class HeroGrpcController {

    @GrpcMethod('HeroesService', 'FindOne')
    findOne(data, metadata: Metadata, call: ServerUnaryCall<any, any>): any {
        console.log(data);

        return {id: 1, ...data};
    }

}
