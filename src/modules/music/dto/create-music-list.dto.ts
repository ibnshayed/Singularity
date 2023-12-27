import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  artist: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
