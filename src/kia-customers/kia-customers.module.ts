import { Module } from '@nestjs/common';
import { KiaCustomersService } from './kia-customers.service';
import { KiaCustomersController } from './kia-customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KiaCustomer, KiaCustomerSchema } from 'src/Schemas/kiaCustomer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: KiaCustomer.name, schema: KiaCustomerSchema },
    ]),
  ],
  controllers: [KiaCustomersController],
  providers: [KiaCustomersService],
})
export class KiaCustomersModule {}
