import { Module } from '@nestjs/common';
import { CuentaCorrienteService } from './cuenta-corriente.service';
import { CuentaCorrienteController } from './cuenta-corriente.controller';

@Module({
  controllers: [CuentaCorrienteController],
  providers: [CuentaCorrienteService],
})
export class CuentaCorrienteModule {}
