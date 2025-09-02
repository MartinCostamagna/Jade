import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisModule } from './pais/pais.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ClienteModule } from './cliente/cliente.module';
import { VentaModule } from './venta/venta.module';
import { CuentaCorrienteModule } from './cuenta-corriente/cuenta-corriente.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { ProductoModule } from './producto/producto.module';
import { MarcaModule } from './marca/marca.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { MonedaModule } from './moneda/moneda.module';
import { CostoModule } from './costo/costo.module';
import { FlujoModule } from './flujo/flujo.module';
import { DetallePagosModule } from './detalle-pagos/detalle-pagos.module';

@Module({
  imports: [PaisModule, ProvinciaModule, CiudadModule, ClienteModule, VentaModule, CuentaCorrienteModule, DetalleVentaModule, ProductoModule, MarcaModule, IngresoModule, UsuarioModule, CuentaModule, MonedaModule, CostoModule, FlujoModule, DetallePagosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
