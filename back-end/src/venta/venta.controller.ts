import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('ventas')
@UseGuards(AuthGuard)
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventaService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateVentaDto) {
    return this.ventaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateVentaDto) {
    return this.ventaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}