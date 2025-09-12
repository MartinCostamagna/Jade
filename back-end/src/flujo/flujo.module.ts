import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flujo } from '../entities/flujo.entity';
import { FlujoService } from './flujo.service';
import { FlujoController } from './flujo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Flujo])],
  controllers: [FlujoController],
  providers: [FlujoService],
  exports: [FlujoService],
})
export class FlujoModule {}