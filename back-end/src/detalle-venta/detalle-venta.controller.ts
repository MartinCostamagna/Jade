import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { CreateDetalleVentaDto } from '../dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from '../dto/update-detalle-venta.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('detalle-ventas')
@UseGuards(AuthGuard)
export class DetalleVentaController {
  constructor(private readonly service: DetalleVentaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateDetalleVentaDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDetalleVentaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}