import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Costo } from '../entities/costo.entity';
import { CreateCostoDto } from '../dto/create-costo.dto';
import { UpdateCostoDto } from '../dto/update-costo.dto';

@Injectable()
export class CostoService {
  constructor(
    @InjectRepository(Costo)
    private readonly costosRepository: Repository<Costo>,
  ) {}

  async findAll(): Promise<Costo[]> {
    return this.costosRepository.find({
      relations: ['cuenta', 'usuario'],
    });
  }

  async findOne(id: number): Promise<Costo> {
    const costo = await this.costosRepository.findOne({
      where: { idCosto: id },
      relations: ['cuenta', 'usuario'],
    });
    if (!costo) {
      throw new NotFoundException(`Costo con id ${id} no encontrado`);
    }
    return costo;
  }

  async create(createDto: CreateCostoDto): Promise<Costo> {
    const costo = this.costosRepository.create(createDto);
    return this.costosRepository.save(costo);
  }

  async update(id: number, updateDto: UpdateCostoDto): Promise<Costo> {
    const costo = await this.findOne(id);
    Object.assign(costo, updateDto);
    return this.costosRepository.save(costo);
  }

  async remove(id: number): Promise<void> {
    const costo = await this.findOne(id);
    await this.costosRepository.remove(costo);
  }
}