import { Injectable } from '@nestjs/common';
import { CreateCuentaCorrienteDto } from './dto/create-cuenta-corriente.dto';
import { UpdateCuentaCorrienteDto } from './dto/update-cuenta-corriente.dto';

@Injectable()
export class CuentaCorrienteService {
  create(createCuentaCorrienteDto: CreateCuentaCorrienteDto) {
    return 'This action adds a new cuentaCorriente';
  }

  findAll() {
    return `This action returns all cuentaCorriente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cuentaCorriente`;
  }

  update(id: number, updateCuentaCorrienteDto: UpdateCuentaCorrienteDto) {
    return `This action updates a #${id} cuentaCorriente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuentaCorriente`;
  }
}
