import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetalleVentaDto {
    @IsInt({ message: 'La cantidad debe ser un número entero' })
    @IsNotEmpty({ message: 'La cantidad es obligatoria' })
    cantidad: number;

    @IsNumber({}, { message: 'El precio unitario debe ser un número válido' })
    @IsNotEmpty({ message: 'El precio unitario es obligatorio' })
    precioUnitario: number;

    @IsNumber({}, { message: 'El subtotal debe ser un número válido' })
    @IsNotEmpty({ message: 'El subtotal es obligatorio' })
    subtotal: number;

    @IsInt({ message: 'La venta debe ser un número entero (ID de la venta)' })
    @IsNotEmpty({ message: 'La venta es obligatoria' })
    idVenta: number;

    @IsInt({ message: 'El producto debe ser un número entero (ID del producto)' })
    @IsNotEmpty({ message: 'El producto es obligatorio' })
    idProducto: number;
}   
