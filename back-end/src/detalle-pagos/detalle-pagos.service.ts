import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePago } from '../entities/detalle-pago.entity';
import { CreateDetallePagoDto } from '../dto/create-detalle-pago.dto';
import { UpdateDetallePagoDto } from '../dto/update-detalle-pago.dto';

@Injectable()
export class DetallePagosService {
  constructor(
    @InjectRepository(DetallePago)
    private readonly detallePagoRepository: Repository<DetallePago>,
  ) {}

  async findAll(): Promise<DetallePago[]> {
    return this.detallePagoRepository.find({
      relations: ['cuentaCorriente'],
    });
  }

  async findOne(id: number): Promise<DetallePago> {
    const detalle = await this.detallePagoRepository.findOne({
      where: { idDetallePago: id },
      relations: ['cuentaCorriente'],
    });
    if (!detalle) {
      throw new NotFoundException(`DetallePago con id ${id} no encontrado`);
    }
    return detalle;
  }

  async create(createDto: CreateDetallePagoDto): Promise<DetallePago> {
    const detalle = this.detallePagoRepository.create(createDto);
    return this.detallePagoRepository.save(detalle);
  }

  async update(id: number, updateDto: UpdateDetallePagoDto): Promise<DetallePago> {
    const detalle = await this.findOne(id);
    Object.assign(detalle, updateDto);
    return this.detallePagoRepository.save(detalle);
  }

  async remove(id: number): Promise<void> {
    const detalle = await this.findOne(id);
    await this.detallePagoRepository.remove(detalle);
  }
}