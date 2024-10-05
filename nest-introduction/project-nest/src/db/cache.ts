import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class CacheProvider implements OnModuleDestroy {
  private readonly db: Redis;

  constructor() {
    this.db = new Redis({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });
  }

  async save(type: string, id: number, value: any): Promise<void> {
    await this.db.set(`${type}:${id}`, JSON.stringify(value));

    await this.updateIds(type, id);
  }

  async get(type: string, id: number): Promise<any> {
    const value = await this.db.get(`${type}:${id}`);
    return JSON.parse(value);
  }

  private async updateIds(type: string, id: number): Promise<void> {
    const ids = await this.db.get(type);

    const idsArray = ids ? JSON.parse(ids) : [];

    if (idsArray.includes(id)) return;

    idsArray.push(+id);
    idsArray.sort();
    await this.db.set(type, JSON.stringify(idsArray));
  }

  async fetchAll(type: string): Promise<any[]> {
    const ids = await this.db.get(type);
    const idsArray = ids ? JSON.parse(ids) : null;

    const values = await Promise.all(
      idsArray.map(async (id: number) => {
        const value = await this.get(type, id);
        return value;
      }),
    );

    return values;
  }

  onModuleDestroy() {
    this.db.disconnect();
  }
}
