import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallePagosService } from './detalle-pagos.service';
import { CreateDetallePagoDto } from './dto/create-detalle-pago.dto';
import { UpdateDetallePagoDto } from './dto/update-detalle-pago.dto';

@Controller('detalle-pagos')
export class DetallePagosController {
  constructor(private readonly detallePagosService: DetallePagosService) {}

  @Post()
  create(@Body() createDetallePagoDto: CreateDetallePagoDto) {
    return this.detallePagosService.create(createDetallePagoDto);
  }

  @Get()
  findAll() {
    return this.detallePagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallePagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallePagoDto: UpdateDetallePagoDto) {
    return this.detallePagosService.update(+id, updateDetallePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallePagosService.remove(+id);
  }
}
