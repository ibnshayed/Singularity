import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { MusicModule } from './music';
import { UserModule } from './user';

@Module({
  imports: [AuthModule, UserModule, MusicModule],
})
export class MainModule {}
