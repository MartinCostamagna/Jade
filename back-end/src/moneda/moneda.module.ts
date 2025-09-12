import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moneda } from '../entities/moneda.entity';
import { MonedaService } from './moneda.service';
import { MonedaController } from './moneda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Moneda])],
  controllers: [MonedaController],
  providers: [MonedaService],
  exports: [MonedaService],
})
export class MonedaModule {}