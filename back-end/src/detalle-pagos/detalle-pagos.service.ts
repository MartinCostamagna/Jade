import { Injectable } from '@nestjs/common';
import { CreateDetallePagoDto } from './dto/create-detalle-pago.dto';
import { UpdateDetallePagoDto } from './dto/update-detalle-pago.dto';

@Injectable()
export class DetallePagosService {
  create(createDetallePagoDto: CreateDetallePagoDto) {
    return 'This action adds a new detallePago';
  }

  findAll() {
    return `This action returns all detallePagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallePago`;
  }

  update(id: number, updateDetallePagoDto: UpdateDetallePagoDto) {
    return `This action updates a #${id} detallePago`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallePago`;
  }
}
