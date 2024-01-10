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
export type DealerDocument = HydratedDocument<Dealer>;
export declare class Dealer {
    dealer_code: String;
    dealer_name: String;
    user_name: String;
    password: String;
    device_id: String;
    dealer_location: String;
    created_at: Date;
    updated_at: Date;
}
export declare const DealerSchema: import("mongoose").Schema<Dealer, import("mongoose").Model<Dealer, any, any, any, import("mongoose").Document<unknown, any, Dealer> & Dealer & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Dealer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Dealer>> & import("mongoose").FlatRecord<Dealer> & {
    _id: import("mongoose").Types.ObjectId;
}>;
