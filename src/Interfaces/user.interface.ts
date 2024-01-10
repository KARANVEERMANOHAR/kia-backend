import { Document } from 'mongoose';
export interface user extends Document {
  readonly name: string;
  readonly user_name: string;
  readonly password: string;
}
