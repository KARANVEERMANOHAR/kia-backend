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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { DealersService } from './dealers.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
export declare class DealersController {
    private readonly dealersService;
    constructor(dealersService: DealersService);
    create(createDealerDto: CreateDealerDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
        exception?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../Schemas/dealer.schema").Dealer> & import("../Schemas/dealer.schema").Dealer & {
            _id: import("mongoose").Types.ObjectId;
        };
        exception?: undefined;
    } | {
        statusCode: number;
        message: string;
        exception: any;
        data?: undefined;
    }>;
    findOne(dealer_code: string): Promise<{
        statusCode: number;
        message: string;
        result: import("mongoose").Document<unknown, {}, import("../Schemas/dealer.schema").Dealer> & import("../Schemas/dealer.schema").Dealer & {
            _id: import("mongoose").Types.ObjectId;
        };
        exception?: undefined;
    } | {
        statusCode: number;
        message: string;
        result: {};
        exception?: undefined;
    } | {
        statusCode: number;
        message: string;
        exception: any;
        result?: undefined;
    }>;
}
