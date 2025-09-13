import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './marca/marca.module';
import { ProductoModule } from './producto/producto.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ClienteModule } from './cliente/cliente.module';
import { CuentaCorrienteModule } from './cuenta-corriente/cuenta-corriente.module';
import { VentaModule } from './venta/venta.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { DetallePagosModule } from './detalle-pagos/detalle-pagos.module';
import { CostoModule } from './costo/costo.module';
import { FlujoModule } from './flujo/flujo.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: config.get<number>('POSTGRES_PORT'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    AuthModule,
    MarcaModule,
    ProductoModule,
    CiudadModule,
    ClienteModule,
    CuentaCorrienteModule,
    VentaModule,
    DetalleVentaModule,
    DetallePagosModule,
    CostoModule,
    FlujoModule,
    IngresoModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}