import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}
}
