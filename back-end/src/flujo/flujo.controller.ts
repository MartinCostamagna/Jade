import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { FlujoService } from './flujo.service';
import { CreateFlujoDto } from '../dto/create-flujo.dto';
import { UpdateFlujoDto } from '../dto/update-flujo.dto';
import { AuthGuard } from '../middlewares/guards/auth.guard';

@Controller('flujo')
@UseGuards(AuthGuard)
export class FlujoController {
  constructor(private readonly flujoService: FlujoService) {}

  @Get()
  findAll() {
    return this.flujoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flujoService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateFlujoDto) {
    return this.flujoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFlujoDto) {
    return this.flujoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flujoService.remove(+id);
  }
}