import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuentaCorrienteService } from './cuenta-corriente.service';
import { CreateCuentaCorrienteDto } from '../dto/create-cuenta-corriente.dto';
import { UpdateCuentaCorrienteDto } from '../dto/update-cuenta-corriente.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('cuenta-corriente')
@UseGuards(AuthGuard)
export class CuentaCorrienteController {
  constructor(private readonly service: CuentaCorrienteService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateCuentaCorrienteDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCuentaCorrienteDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}