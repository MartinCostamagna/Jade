import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CreateCuentaDto } from '../dto/create-cuenta.dto';
import { UpdateCuentaDto } from '../dto/update-cuenta.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cuentas')
@UseGuards(JwtAuthGuard)
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentaService.create(createCuentaDto);
  }

  @Get()
  findAll() {
    return this.cuentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaDto: UpdateCuentaDto) {
    return this.cuentaService.update(+id, updateCuentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(+id);
  }
}