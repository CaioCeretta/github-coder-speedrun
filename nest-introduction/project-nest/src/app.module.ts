import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ProductController } from './product.controller';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
