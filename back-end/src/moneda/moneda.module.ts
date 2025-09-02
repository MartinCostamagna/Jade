import { Module } from '@nestjs/common';
import { MonedaService } from './moneda.service';
import { MonedaController } from './moneda.controller';

@Module({
  controllers: [MonedaController],
  providers: [MonedaService],
})
export class MonedaModule {}
