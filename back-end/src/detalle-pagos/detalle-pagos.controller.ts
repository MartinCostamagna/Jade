import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DetallePagosService } from './detalle-pagos.service';
import { CreateDetallePagoDto } from '../dto/create-detalle-pago.dto';
import { UpdateDetallePagoDto } from '../dto/update-detalle-pago.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('detalle-pagos')
@UseGuards(AuthGuard)
export class DetallePagosController {
  constructor(private readonly service: DetallePagosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateDetallePagoDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDetallePagoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}