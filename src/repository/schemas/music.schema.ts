/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MusicDocument = HydratedDocument<Music>;

@Schema({ timestamps: true, versionKey: false })
export class Music {
  @Prop({ type: String, trim: true, required: true })
  title: string;

  @Prop({ type: String, trim: true })
  artist: string;

  @Prop({ type: String, trim: true, required: true })
  url: string;

  @Prop({ type: Boolean, default: true })
  status: boolean;
}

export const MusicSchema = SchemaFactory.createForClass(Music);
