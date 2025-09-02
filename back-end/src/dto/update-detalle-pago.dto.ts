import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallePagoDto } from './create-detalle-pago.dto';

export class UpdateDetallePagoDto extends PartialType(CreateDetallePagoDto) {}
