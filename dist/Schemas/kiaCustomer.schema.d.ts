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
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
export type KiaCustomerDocument = HydratedDocument<KiaCustomer>;
export declare class KiaCustomer {
    name: String;
    mobile: Number;
    city: String;
    email: String;
    car_model: String;
    variant: String;
    time_spend: String;
    product_interested: String[];
    dealer_code: String;
    dealer_id: mongoose.Types.ObjectId;
    created_at: Date;
    created_by: mongoose.Types.ObjectId;
    updated_at: Date;
    updated_by: mongoose.Types.ObjectId;
}
export declare const KiaCustomerSchema: mongoose.Schema<KiaCustomer, mongoose.Model<KiaCustomer, any, any, any, mongoose.Document<unknown, any, KiaCustomer> & KiaCustomer & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, KiaCustomer, mongoose.Document<unknown, {}, mongoose.FlatRecord<KiaCustomer>> & mongoose.FlatRecord<KiaCustomer> & {
    _id: mongoose.Types.ObjectId;
}>;
