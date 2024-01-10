import { Document, Types } from 'mongoose';
export interface KiaCustomer extends Document {
  readonly name: string;
  readonly mobile: number;
  readonly city: string;
  readonly email: string;
  readonly car_model: string;
  readonly time_spend: string;
  readonly variant: string;
  readonly product_insterested: string;
  readonly dealer_code: Types.ObjectId;
}
