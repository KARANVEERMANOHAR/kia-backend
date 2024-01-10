import { Injectable } from '@nestjs/common';
import { CreateKiaCustomerDto } from './dto/create-kia-customer.dto';
import { UpdateKiaCustomerDto } from './dto/update-kia-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { KiaCustomer } from 'src/Schemas/kiaCustomer.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class KiaCustomersService {
  constructor(
    @InjectModel(KiaCustomer.name)
    private kiaCustomerModel: mongoose.Model<KiaCustomer>,
  ) {}

  async create(createKiaCustomerDto: CreateKiaCustomerDto) {
    try {
      const createdCat = new this.kiaCustomerModel(createKiaCustomerDto);
      const response = await createdCat.save();
      return {
        statusCode: 200,
        message: 'Successfully Created Customer',
        data: response,
      };
    } catch (exception) {
      return { statusCode: 500, message: 'Exception Occured' };
    }
  }
  async bulkInsert(data: object[]) {
    try {
      await this.kiaCustomerModel.insertMany(data);
      return { statusCode: 200, message: 'Bulk Insertion Successfully' };
    } catch (error) {
      return { statusCode: 500, message: 'Exception Occured', data: error };
    }
  }
  findAll() {
    return `This action returns all kiaCustomers`;
  }

  async findOne(id: string) {
    try {
      const result = await this.kiaCustomerModel.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      if (result) {
        return { statusCode: 200, message: 'Successfully Found', data: result };
      } else {
        return { statusCode: 200, message: 'Not Found', data: null };
      }
    } catch (ex) {
      console.log('exception at find customer by code', ex);
      return null;
    }
  }

  async update(id: string, updateKiaCustomerDto: UpdateKiaCustomerDto) {
    try {
      const userData = {
        ...updateKiaCustomerDto,
        updated_at: new Date().toISOString(),
        updated_by: updateKiaCustomerDto.dealer_code
          ? updateKiaCustomerDto.dealer_code
          : '',
      };
      const result = await this.kiaCustomerModel.updateOne(
        {
          _id: new mongoose.Types.ObjectId(id),
        },
        userData,
      );
      return {
        statusCode: 200,
        message: 'Kia customer update successfully',
        data: result,
      };
    } catch (error) {
      console.log(error);
      return { statusCode: 500, message: 'Exception Occured', data: error };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} kiaCustomer`;
  }
}
