import { Injectable } from '@nestjs/common';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dealer } from 'src/Schemas/dealer.schema';

@Injectable()
export class DealersService {
  constructor(@InjectModel(Dealer.name) private dealerModel: Model<Dealer>) {}
  async create(createDealerDto: CreateDealerDto) {
    try {
      const findResult = await this.getDealerByDealerCode(
        createDealerDto?.dealer_code,
      );
      if (findResult?.data?.dealer_code) {
        return { statusCode: 400, message: 'Dealer is already exists' };
      } else {
        console.log(findResult);
        const createdCat = new this.dealerModel(createDealerDto);
        const response = await createdCat.save();
        return {
          statusCode: 200,
          message: 'Successfully Created Dealer',
          data: response,
        };
      }
    } catch (exception) {
      console.log('exception:', exception);
      return {
        statusCode: 500,
        message: 'Exception Occured',
        exception: exception._message,
      };
    }
  }

  // findAll() {
  //   return `This action returns all dealers`;
  // }

  async findOne(dealer_code: string) {
    console.log(dealer_code);
    try {
      const result = await this.getDealerByDealerCode(dealer_code);
      if (result.data) {
        return {
          statusCode: 200,
          message: 'Found ',
          result: result.data,
        };
      } else {
        return {
          statusCode: 200,
          message: 'Not found Found ',
          result: {},
        };
      }
    } catch (exception) {
      console.log('exception:', exception);
      return {
        statusCode: 500,
        message: 'Exception Occured',
        exception: exception._message,
      };
    }
  }

  // update(id: number, updateDealerDto: UpdateDealerDto) {
  //   return `This action updates a #${id} dealer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dealer`;
  // }

  async getDealerByDealerCode(dealer_code: string) {
    try {
      const result = await this.dealerModel.findOne({
        dealer_code: dealer_code,
      });
      return { data: result };
    } catch (ex) {
      console.log('exception at find dealer by code', ex);
      return null;
    }
  }
}
