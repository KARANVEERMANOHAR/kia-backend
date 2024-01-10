import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
export type KiaCustomerDocument = HydratedDocument<KiaCustomer>;
@Schema()
export class KiaCustomer {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  mobile: Number;

  @Prop()
  city: String;

  @Prop()
  email: String;

  @Prop()
  car_model: String;

  @Prop()
  variant: String;

  @Prop()
  time_spend: String;

  @Prop({
    type: [String],
  })
  product_interested: String[];

  @Prop()
  dealer_code: String;

  @Prop()
  dealer_id: mongoose.Types.ObjectId;

  @Prop({
    type: Date,
    default: new Date(),
  })
  created_at: Date;

  @Prop()
  created_by: mongoose.Types.ObjectId;

  @Prop()
  updated_at: Date;

  @Prop()
  updated_by: mongoose.Types.ObjectId;
}
export const KiaCustomerSchema = SchemaFactory.createForClass(KiaCustomer);
