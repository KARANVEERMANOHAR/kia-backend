import { IsString } from '@nestjs/class-validator';
export class CreateDealerDto {
  @IsString()
  dealer_code: string;

  @IsString()
  dealer_name: string;

  @IsString()
  user_name: string;

  @IsString()
  password: string;

  @IsString()
  dealer_location: string;

  @IsString()
  device_id: string;
}
