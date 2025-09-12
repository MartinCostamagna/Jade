import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePago } from '../entities/detalle-pago.entity';
import { DetallePagosService } from './detalle-pagos.service';
import { DetallePagosController } from './detalle-pagos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePago])],
  controllers: [DetallePagosController],
  providers: [DetallePagosService],
  exports: [DetallePagosService],
})
export class DetallePagosModule {}