import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuentaCorriente } from '../entities/cuenta-corriente.entity';
import { CreateCuentaCorrienteDto } from '../dto/create-cuenta-corriente.dto';
import { UpdateCuentaCorrienteDto } from '../dto/update-cuenta-corriente.dto';

@Injectable()
export class CuentaCorrienteService {
  constructor(
    @InjectRepository(CuentaCorriente)
    private readonly cuentaCorrienteRepository: Repository<CuentaCorriente>,
  ) {}

  async findAll(): Promise<CuentaCorriente[]> {
    return this.cuentaCorrienteRepository.find();
  }

  async findOne(id: number): Promise<CuentaCorriente> {
    const cuenta = await this.cuentaCorrienteRepository.findOne({ where: { idCuentaCorriente: id } });
    if (!cuenta) {
      throw new NotFoundException(`CuentaCorriente con id ${id} no encontrada`);
    }
    return cuenta;
  }

  async create(createDto: CreateCuentaCorrienteDto): Promise<CuentaCorriente> {
    const cuenta = this.cuentaCorrienteRepository.create(createDto);
    return this.cuentaCorrienteRepository.save(cuenta);
  }

  async update(id: number, updateDto: UpdateCuentaCorrienteDto): Promise<CuentaCorriente> {
    const cuenta = await this.findOne(id);
    Object.assign(cuenta, updateDto);
    return this.cuentaCorrienteRepository.save(cuenta);
  }

  async remove(id: number): Promise<void> {
    const cuenta = await this.findOne(id);
    await this.cuentaCorrienteRepository.remove(cuenta);
  }
}