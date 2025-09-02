import { Module } from '@nestjs/common';
import { CostoService } from './costo.service';
import { CostoController } from './costo.controller';

@Module({
  controllers: [CostoController],
  providers: [CostoService],
})
export class CostoModule {}
