import { Document } from 'mongoose';
export interface KiaCustomer extends Document {
  readonly dealer_code: string;
  readonly dealer_name: number;
}
