import { PartialType } from '@nestjs/mapped-types';
import { CreateKiaCustomerDto } from './create-kia-customer.dto';

export class UpdateKiaCustomerDto extends PartialType(CreateKiaCustomerDto) {}
