import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('clientes')
@UseGuards(JwtAuthGuard)
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.clienteService.findOne(+dni);
  }

  @Patch(':dni')
  update(@Param('dni') dni: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+dni, updateClienteDto);
  }

  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.clienteService.remove(+dni);
  }
}