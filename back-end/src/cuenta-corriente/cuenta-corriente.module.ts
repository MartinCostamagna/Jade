import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaCorriente } from '../entities/cuenta-corriente.entity';
import { CuentaCorrienteService } from './cuenta-corriente.service';
import { CuentaCorrienteController } from './cuenta-corriente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuentaCorriente])],
  controllers: [CuentaCorrienteController],
  providers: [CuentaCorrienteService],
  exports: [CuentaCorrienteService],
})
export class CuentaCorrienteModule {}