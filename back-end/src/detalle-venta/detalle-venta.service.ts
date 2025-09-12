import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleVenta } from '../entities/detalle-venta.entity';
import { CreateDetalleVentaDto } from '../dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from '../dto/update-detalle-venta.dto';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private readonly detalleVentaRepository: Repository<DetalleVenta>,
  ) {}

  async findAll(): Promise<DetalleVenta[]> {
    return this.detalleVentaRepository.find({
      relations: ['venta', 'producto'],
    });
  }

  async findOne(id: number): Promise<DetalleVenta> {
    const detalle = await this.detalleVentaRepository.findOne({
      where: { idDetalleVenta: id },
      relations: ['venta', 'producto'],
    });
    if (!detalle) {
      throw new NotFoundException(`DetalleVenta con id ${id} no encontrado`);
    }
    return detalle;
  }

  async create(createDto: CreateDetalleVentaDto): Promise<DetalleVenta> {
    const detalle = this.detalleVentaRepository.create(createDto);
    return this.detalleVentaRepository.save(detalle);
  }

  async update(id: number, updateDto: UpdateDetalleVentaDto): Promise<DetalleVenta> {
    const detalle = await this.findOne(id);
    Object.assign(detalle, updateDto);
    return this.detalleVentaRepository.save(detalle);
  }

  async remove(id: number): Promise<void> {
    const detalle = await this.findOne(id);
    await this.detalleVentaRepository.remove(detalle);
  }
}