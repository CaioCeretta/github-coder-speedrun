import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache';
import User from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly cache: CacheProvider) {}

  @Get()
  async fetchAll() {
    return this.cache.fetchAll;
  }

  @Post()
  async save(@Body() user: User) {
    return this.cache.save('user', user.id, user);
  }
}
