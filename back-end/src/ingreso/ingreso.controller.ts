import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { CreateIngresoDto } from '../dto/create-ingreso.dto';
import { UpdateIngresoDto } from '../dto/update-ingreso.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('ingresos')
@UseGuards(AuthGuard)
export class IngresoController {
  constructor(private readonly ingresoService: IngresoService) {}

  @Get()
  findAll() {
    return this.ingresoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingresoService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateIngresoDto) {
    return this.ingresoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIngresoDto) {
    return this.ingresoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingresoService.remove(+id);
  }
}