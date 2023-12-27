import { Injectable } from '@nestjs/common';
import { DataServices } from '../../repository';
import { CreateMusicDto } from './dto';

@Injectable()
export class MusicService {
  constructor(private readonly db: DataServices) {}

  async createMusicList(createMusicDto: CreateMusicDto[]) {
    console.log(
      '🚀 ~ file: music.service.ts:10 ~ MusicService ~ createMusicList ~ createMusicDto:',
      createMusicDto,
    );
    return this.db.music.createMany(createMusicDto);
    // return 'createMusicList';
  }

  findAll(searchText: string) {
    let filter = {};
    if (searchText) {
      filter = {
        $or: [
          {
            title: new RegExp(searchText, 'ig'),
          },
          {
            artist: new RegExp(searchText, 'ig'),
          },
        ],
      };
    }
    return this.db.music.findMany({
      filter,
    });
  }
}
