import { Module } from '@nestjs/common';
import { CacheProvider } from './cache';

@Module({
  providers: [CacheProvider],
  exports: [CacheProvider],
})
export class DbModule {}
