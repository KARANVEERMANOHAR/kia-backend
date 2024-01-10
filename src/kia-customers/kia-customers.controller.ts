import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { KiaCustomersService } from './kia-customers.service';
import { CreateKiaCustomerDto } from './dto/create-kia-customer.dto';
import { UpdateKiaCustomerDto } from './dto/update-kia-customer.dto';

@Controller('kia-customers')
export class KiaCustomersController {
  constructor(private readonly kiaCustomersService: KiaCustomersService) {}

  @Post()
  create(@Body() createKiaCustomerDto: CreateKiaCustomerDto) {
    return this.kiaCustomersService.create(createKiaCustomerDto);
  }

  @Get()
  findAll() {
    return this.kiaCustomersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kiaCustomersService.findOne(id);
  }

  // @Post(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateKiaCustomerDto: UpdateKiaCustomerDto,
  // ) {
  //   return this.kiaCustomersService.update(id, updateKiaCustomerDto);
  // }
  // @Post('bulk-insert')
  // async bulkInsert(@Body() data: any[]) {
  //   return this.kiaCustomersService.bulkInsert(data);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.kiaCustomersService.remove(+id);
  // }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'Success';
  }
}
