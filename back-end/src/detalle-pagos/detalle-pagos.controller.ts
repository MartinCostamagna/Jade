import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DetallePagosService } from './detalle-pagos.service';
import { CreateDetallePagoDto } from '../dto/create-detalle-pago.dto';
import { UpdateDetallePagoDto } from '../dto/update-detalle-pago.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('detalle-pagos')
@UseGuards(JwtAuthGuard)
export class DetallePagoController {
  constructor(private readonly detallePagoService: DetallePagosService) {}

  @Post()
  create(@Body() createDetallePagoDto: CreateDetallePagoDto) {
    return this.detallePagoService.create(createDetallePagoDto);
  }

  @Get()
  findAll() {
    return this.detallePagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallePagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallePagoDto: UpdateDetallePagoDto) {
    return this.detallePagoService.update(+id, updateDetallePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallePagoService.remove(+id);
  }
}