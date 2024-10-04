import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get('ping')
  ping(): string {
    return 'Pong';
  }
}
