import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePago } from '../entities/detalle-pago.entity';
import { DetallePagosService } from './detalle-pagos.service';
import { DetallePagoController } from './detalle-pagos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePago])],
  controllers: [DetallePagoController],
  providers: [DetallePagosService],
  exports: [DetallePagosService],
})
export class DetallePagosModule {}