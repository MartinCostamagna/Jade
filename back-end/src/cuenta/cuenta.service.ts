import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from '../entities/cuenta.entity';
import { CreateCuentaDto } from '../dto/create-cuenta.dto';
import { UpdateCuentaDto } from '../dto/update-cuenta.dto';

@Injectable()
export class CuentaService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
  ) {}

  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    const cuenta = this.cuentaRepository.create(createCuentaDto);
    return this.cuentaRepository.save(cuenta);
  }

  async findAll(): Promise<Cuenta[]> {
    return this.cuentaRepository.find({
      relations: ['moneda'],
    });
  }

  async findOne(id: number): Promise<Cuenta> {
    const cuenta = await this.cuentaRepository.findOne({
      where: { idCuenta: id },
      relations: ['moneda'],
    });
    if (!cuenta) {
      throw new NotFoundException(`Cuenta con id ${id} no encontrada`);
    }
    return cuenta;
  }

  async update(id: number, updateCuentaDto: UpdateCuentaDto): Promise<Cuenta> {
    const cuenta = await this.findOne(id);
    Object.assign(cuenta, updateCuentaDto);
    return this.cuentaRepository.save(cuenta);
  }

  async remove(id: number): Promise<void> {
    const cuenta = await this.findOne(id);
    await this.cuentaRepository.remove(cuenta);
  }
}