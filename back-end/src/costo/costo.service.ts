import { Injectable } from '@nestjs/common';
import { CreateCostoDto } from './dto/create-costo.dto';
import { UpdateCostoDto } from './dto/update-costo.dto';

@Injectable()
export class CostoService {
  create(createCostoDto: CreateCostoDto) {
    return 'This action adds a new costo';
  }

  findAll() {
    return `This action returns all costo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costo`;
  }

  update(id: number, updateCostoDto: UpdateCostoDto) {
    return `This action updates a #${id} costo`;
  }

  remove(id: number) {
    return `This action removes a #${id} costo`;
  }
}
