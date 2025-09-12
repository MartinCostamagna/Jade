import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flujo } from '../entities/flujo.entity';
import { CreateFlujoDto } from '../dto/create-flujo.dto';
import { UpdateFlujoDto } from '../dto/update-flujo.dto';

@Injectable()
export class FlujoService {
  constructor(
    @InjectRepository(Flujo)
    private readonly flujoRepository: Repository<Flujo>,
  ) {}

  async findAll(): Promise<Flujo[]> {
    return this.flujoRepository.find({
      relations: ['cuenta', 'usuario'],
    });
  }

  async findOne(id: number): Promise<Flujo> {
    const flujo = await this.flujoRepository.findOne({
      where: { idFlujo: id },
      relations: ['cuenta', 'usuario'],
    });
    if (!flujo) {
      throw new NotFoundException(`Flujo con id ${id} no encontrado`);
    }
    return flujo;
  }

  async create(createDto: CreateFlujoDto): Promise<Flujo> {
    const flujo = this.flujoRepository.create(createDto);
    return this.flujoRepository.save(flujo);
  }

  async update(id: number, updateDto: UpdateFlujoDto): Promise<Flujo> {
    const flujo = await this.findOne(id);
    Object.assign(flujo, updateDto);
    return this.flujoRepository.save(flujo);
  }

  async remove(id: number): Promise<void> {
    const flujo = await this.findOne(id);
    await this.flujoRepository.remove(flujo);
  }
}