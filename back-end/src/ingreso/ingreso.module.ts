import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingreso } from '../entities/ingreso.entity';
import { IngresoService } from './ingreso.service';
import { IngresoController } from './ingreso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ingreso])],
  controllers: [IngresoController],
  providers: [IngresoService],
  exports: [IngresoService],
})
export class IngresoModule {}