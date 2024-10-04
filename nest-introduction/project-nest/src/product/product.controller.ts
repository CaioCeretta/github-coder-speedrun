import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {

  ping(): string {
    return 'Pong'
  }

}
