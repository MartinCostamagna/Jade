import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingreso } from '../entities/ingreso.entity';
import { CreateIngresoDto } from '../dto/create-ingreso.dto';
import { UpdateIngresoDto } from '../dto/update-ingreso.dto';

@Injectable()
export class IngresoService {
  constructor(
    @InjectRepository(Ingreso)
    private readonly ingresoRepository: Repository<Ingreso>,
  ) {}

  async findAll(): Promise<Ingreso[]> {
    return this.ingresoRepository.find({
      relations: ['producto', 'usuario'],
    });
  }

  async findOne(id: number): Promise<Ingreso> {
    const ingreso = await this.ingresoRepository.findOne({
      where: { idIngreso: id },
      relations: ['producto', 'usuario'],
    });
    if (!ingreso) {
      throw new NotFoundException(`Ingreso con id ${id} no encontrado`);
    }
    return ingreso;
  }

  async create(createDto: CreateIngresoDto): Promise<Ingreso> {
    const ingreso = this.ingresoRepository.create(createDto);
    return this.ingresoRepository.save(ingreso);
  }

  async update(id: number, updateDto: UpdateIngresoDto): Promise<Ingreso> {
    const ingreso = await this.findOne(id);
    Object.assign(ingreso, updateDto);
    return this.ingresoRepository.save(ingreso);
  }

  async remove(id: number): Promise<void> {
    const ingreso = await this.findOne(id);
    await this.ingresoRepository.remove(ingreso);
  }
}