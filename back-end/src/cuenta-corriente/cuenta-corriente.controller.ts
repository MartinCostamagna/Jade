import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CuentaCorrienteService } from './cuenta-corriente.service';
import { CreateCuentaCorrienteDto } from '../dto/create-cuenta-corriente.dto';
import { UpdateCuentaCorrienteDto } from '../dto/update-cuenta-corriente.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cuentas-corrientes')
@UseGuards(JwtAuthGuard)
export class CuentaCorrienteController {
  constructor(private readonly cuentaCorrienteService: CuentaCorrienteService) {}

  @Post()
  create(@Body() createCuentaCorrienteDto: CreateCuentaCorrienteDto) {
    return this.cuentaCorrienteService.create(createCuentaCorrienteDto);
  }

  @Get()
  findAll() {
    return this.cuentaCorrienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaCorrienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaCorrienteDto: UpdateCuentaCorrienteDto) {
    return this.cuentaCorrienteService.update(+id, updateCuentaCorrienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaCorrienteService.remove(+id);
  }
}