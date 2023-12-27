import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Music } from '../schemas';
import { User } from '../schemas/user.schema';
import { DataServices } from './data-service.abastract';
import { GenericRepository } from './generic-repository.abstract';
import { MongoDBGenericRepository } from './mongodb-generic.repository';

@Injectable()
export class MongoDBDataServices
  implements DataServices, OnApplicationBootstrap
{
  user: MongoDBGenericRepository<User>;
  music: GenericRepository<Music>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: PaginateModel<User>,
    @InjectModel(Music.name)
    private MusicRepository: PaginateModel<Music>,
  ) {}

  onApplicationBootstrap() {
    this.user = new MongoDBGenericRepository<User>(this.UserRepository);
    this.music = new MongoDBGenericRepository<Music>(this.MusicRepository);
  }
}
