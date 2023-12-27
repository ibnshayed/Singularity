import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../../common';
import { CreateMusicDto } from './dto';
import { MusicService } from './music.service';

@ApiTags('music')
@Public()
@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('create/many')
  createMusicList(@Body() createMusicDto: CreateMusicDto[]) {
    return this.musicService.createMusicList(createMusicDto);
  }

  @Get('find-all')
  findAll(@Query('searchtext') searchText: string) {
    return this.musicService.findAll(searchText);
  }
}
