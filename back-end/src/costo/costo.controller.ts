import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CostoService } from './costo.service';
import { CreateCostoDto } from '../dto/create-costo.dto';
import { UpdateCostoDto } from '../dto/update-costo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('costos')
@UseGuards(JwtAuthGuard)
export class CostoController {
  constructor(private readonly costoService: CostoService) {}

  @Post()
  create(@Body() createCostoDto: CreateCostoDto) {
    return this.costoService.create(createCostoDto);
  }

  @Get()
  findAll() {
    return this.costoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostoDto: UpdateCostoDto) {
    return this.costoService.update(+id, updateCostoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costoService.remove(+id);
  }
}