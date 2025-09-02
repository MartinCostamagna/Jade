import { IsDateString, IsNotEmpty, IsString, Length, IsNumber, IsInt } from "class-validator";

export class CreateCostoDto {
    @IsDateString({}, { message: 'La fecha debe estar en formato válido (YYYY-MM-DD)' })
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    fecha: Date;
    
    @IsString({ message: 'La descripción debe ser un texto' })
    @IsNotEmpty({ message: 'La descripción es obligatoria' })
    @Length(1, 255, { message: 'La descripción no puede superar los 255 caracteres' })
    descripcion: string;
    
    @IsNumber({}, { message: 'El monto debe ser un número válido' })
    @IsNotEmpty({ message: 'El monto es obligatorio' })
    monto: number;
    
    @IsInt({ message: 'La cuenta debe ser un número entero (ID de la cuenta)' })
    @IsNotEmpty({ message: 'La cuenta es obligatoria' })
    idCuenta: number;
    
    @IsInt({ message: 'El usuario debe ser un número entero (ID del usuario)' })
    @IsNotEmpty({ message: 'El usuario es obligatorio' })
    idUsuario: number;
}
