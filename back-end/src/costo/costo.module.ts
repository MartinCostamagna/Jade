import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Costo } from '../entities/costo.entity';
import { CostoService } from './costo.service';
import { CostoController } from './costo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Costo])],
  controllers: [CostoController],
  providers: [CostoService],
  exports: [CostoService],
})
export class CostoModule {}