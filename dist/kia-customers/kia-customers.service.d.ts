/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateKiaCustomerDto } from './dto/create-kia-customer.dto';
import { UpdateKiaCustomerDto } from './dto/update-kia-customer.dto';
import { KiaCustomer } from 'src/Schemas/kiaCustomer.schema';
import * as mongoose from 'mongoose';
export declare class KiaCustomersService {
    private kiaCustomerModel;
    constructor(kiaCustomerModel: mongoose.Model<KiaCustomer>);
    create(createKiaCustomerDto: CreateKiaCustomerDto): Promise<{
        statusCode: number;
        message: string;
        data: mongoose.Document<unknown, {}, KiaCustomer> & KiaCustomer & {
            _id: mongoose.Types.ObjectId;
        };
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    bulkInsert(data: object[]): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: mongoose.Document<unknown, {}, KiaCustomer> & KiaCustomer & {
            _id: mongoose.Types.ObjectId;
        };
    }>;
    update(id: string, updateKiaCustomerDto: UpdateKiaCustomerDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: number): string;
}
