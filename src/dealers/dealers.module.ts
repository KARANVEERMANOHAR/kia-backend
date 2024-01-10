import { Module } from '@nestjs/common';
import { DealersService } from './dealers.service';
import { DealersController } from './dealers.controller';
import { Dealer, DealerSchema } from 'src/Schemas/dealer.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dealer.name, schema: DealerSchema }]),
  ],
  controllers: [DealersController],
  providers: [DealersService],
})
export class DealersModule {}
