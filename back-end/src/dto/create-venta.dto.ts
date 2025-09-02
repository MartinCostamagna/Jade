import { IsDateString, IsNotEmpty, IsString, Length, IsNumber, IsInt } from "class-validator";

export class CreateVentaDto {
    @IsDateString({}, { message: 'La fecha debe estar en formato válido (YYYY-MM-DD)' })
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    fecha: Date;
    
    @IsString({ message: 'El número de factura debe ser un texto' })
    @IsNotEmpty({ message: 'El número de factura es obligatorio' })
    @Length(1, 11, { message: 'El número de factura no puede superar los 11 caracteres' })
    numeroFactura: string;
    
    @IsNumber({}, { message: 'El total debe ser un número válido' })
    @IsNotEmpty({ message: 'El total es obligatorio' })
    total: number;
    
    @IsInt({ message: 'El usuario debe ser un número entero (ID del usuario)' })
    @IsNotEmpty({ message: 'El usuario es obligatorio' })
    idUsuario: number;
    
    @IsInt({ message: 'El cliente debe ser un número entero (DNI del cliente)' })
    @IsNotEmpty({ message: 'El cliente es obligatorio' })
    dniCliente: number;
    
    @IsInt({ message: 'La cuenta corriente debe ser un número entero (ID de la cuenta corriente)' })
    @IsNotEmpty({ message: 'La cuenta corriente es obligatoria' })
    idCuentaCorriente: number;
}
