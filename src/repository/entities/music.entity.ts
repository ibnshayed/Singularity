import { Types } from 'mongoose';

export interface MusicEntity {
  _id?: Types.ObjectId;

  title: string;
  artist: string;
  url: string;

  status?: boolean;
}
