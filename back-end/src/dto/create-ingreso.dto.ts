import { IsDateString, IsNotEmpty, IsInt, IsNumber } from "class-validator";

export class CreateIngresoDto {
    @IsDateString({}, { message: 'La fecha debe estar en formato válido (YYYY-MM-DD)' })
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    fecha: Date;
    
    @IsInt({ message: 'La cantidad debe ser un número entero' })
    @IsNotEmpty({ message: 'La cantidad es obligatoria' })
    cantidad: number;
    
    @IsNumber({}, { message: 'El precio unitario debe ser un número válido' })
    @IsNotEmpty({ message: 'El precio unitario es obligatorio' })
    precioUnitario: number;
    
    @IsNumber({}, { message: 'El total debe ser un número válido' })
    @IsNotEmpty({ message: 'El total es obligatorio' })
    total: number;
    
    @IsInt({ message: 'El producto debe ser un número entero (ID del producto)' })
    @IsNotEmpty({ message: 'El producto es obligatorio' })
    idProducto: number;
    
    @IsInt({ message: 'El usuario debe ser un número entero (ID del usuario)' })
    @IsNotEmpty({ message: 'El usuario es obligatorio' })
    idUsuario: number;
}
