import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from '../entities/ciudad.entity';
import { CreateCiudadDto } from '../dto/create-ciudad.dto';
import { UpdateCiudadDto } from '../dto/update-ciudad.dto';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  async findAll(): Promise<Ciudad[]> {
    return this.ciudadRepository.find();
  }

  async findOne(id: number): Promise<Ciudad> {
    const ciudad = await this.ciudadRepository.findOne({ where: { idCiudad: id } });
    if (!ciudad) {
      throw new NotFoundException(`Ciudad con id ${id} no encontrada`);
    }
    return ciudad;
  }

  async create(createCiudadDto: CreateCiudadDto): Promise<Ciudad> {
    const ciudad = this.ciudadRepository.create(createCiudadDto);
    return this.ciudadRepository.save(ciudad);
  }

  async update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<Ciudad> {
    const ciudad = await this.findOne(id);
    Object.assign(ciudad, updateCiudadDto);
    return this.ciudadRepository.save(ciudad);
  }

  async remove(id: number): Promise<void> {
    const ciudad = await this.findOne(id);
    await this.ciudadRepository.remove(ciudad);
  }
}