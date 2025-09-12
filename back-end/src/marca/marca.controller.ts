import {Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from '../dto/create-marca.dto';
import { UpdateMarcaDto } from '../dto/update-marca.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('marcas')
@UseGuards(AuthGuard)
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Get()
  findAll() {
    return this.marcaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcaService.findOne(+id);
  }

  @Post()
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaService.create(createMarcaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaService.update(+id, updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaService.remove(+id);
  }
}