import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DealerDocument = HydratedDocument<Dealer>;
@Schema()
export class Dealer {
  @Prop({ required: true })
  dealer_code: String;

  @Prop({ required: true })
  dealer_name: String;

  @Prop()
  user_name: String;

  @Prop()
  password: String;

  @Prop()
  device_id: String;

  @Prop()
  dealer_location: String;

  @Prop({
    type: Date,
    default: new Date(),
  })
  created_at: Date;
  @Prop()
  updated_at: Date;
}
export const DealerSchema = SchemaFactory.createForClass(Dealer);
