import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Moneda } from '../entities/moneda.entity';
import { CreateMonedaDto } from '../dto/create-moneda.dto';
import { UpdateMonedaDto } from '../dto/update-moneda.dto';

@Injectable()
export class MonedaService {
  constructor(
    @InjectRepository(Moneda)
    private readonly monedaRepository: Repository<Moneda>,
  ) {}

  async create(createMonedaDto: CreateMonedaDto): Promise<Moneda> {
    const moneda = this.monedaRepository.create(createMonedaDto);
    return this.monedaRepository.save(moneda);
  }

  async findAll(): Promise<Moneda[]> {
    return this.monedaRepository.find();
  }

  async findOne(id: number): Promise<Moneda> {
    const moneda = await this.monedaRepository.findOne({ where: { idMoneda: id } });
    if (!moneda) {
      throw new NotFoundException(`Moneda con id ${id} no encontrada`);
    }
    return moneda;
  }

  async update(id: number, updateMonedaDto: UpdateMonedaDto): Promise<Moneda> {
    const moneda = await this.findOne(id);
    Object.assign(moneda, updateMonedaDto);
    return this.monedaRepository.save(moneda);
  }

  async remove(id: number): Promise<void> {
    const moneda = await this.findOne(id);
    await this.monedaRepository.remove(moneda);
  }
}