import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CostoService } from './costo.service';
import { CreateCostoDto } from '../dto/create-costo.dto';
import { UpdateCostoDto } from '../dto/update-costo.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('costos')
@UseGuards(AuthGuard)
export class CostoController {
  constructor(private readonly costoService: CostoService) {}

  @Get()
  findAll() {
    return this.costoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costoService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateCostoDto) {
    return this.costoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCostoDto) {
    return this.costoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costoService.remove(+id);
  }
}