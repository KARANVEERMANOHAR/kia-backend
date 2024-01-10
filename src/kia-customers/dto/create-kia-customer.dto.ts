import {
  IsArray,
  IsDate,
  IsMongoId,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';
import * as mongoose from 'mongoose';

export class CreateKiaCustomerDto {
  @IsString()
  name: string;

  @IsNumber()
  mobile: string;

  @IsString()
  city: string;

  @IsString()
  email: string;

  @IsString()
  car_model: string;

  @IsString()
  variant: string;

  @IsString()
  time_spend: string;

  @IsArray()
  product_interested: object[];

  @IsString()
  dealer_code: string;

  @IsMongoId()
  dealer_id: mongoose.Types.ObjectId;
}
