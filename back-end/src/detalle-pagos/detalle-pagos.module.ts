import { Module } from '@nestjs/common';
import { DetallePagosService } from './detalle-pagos.service';
import { DetallePagosController } from './detalle-pagos.controller';

@Module({
  controllers: [DetallePagosController],
  providers: [DetallePagosService],
})
export class DetallePagosModule {}
