import * as mongoose from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { SchemaTypes, Types, Document } from 'mongoose';
export const UserSchema = new mongoose.Schema({
  name: String,
  user_name: String,
  password: String,
  created_at: {
    type: Date,
    default: new Date(),
  },
  Updated_at: {
    type: Date,
  },
  created_by: mongoose.Types.ObjectId,
});
