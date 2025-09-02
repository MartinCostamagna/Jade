import { IsString, IsNotEmpty, Length, IsDateString, IsNumber, IsInt } from "class-validator";

export class CreateDetallePagoDto {
    @IsString({ message: 'La descripción debe ser un texto' })
    @IsNotEmpty({ message: 'La descripción es obligatoria' })
    @Length(1, 255, { message: 'La descripción no puede superar los 255 caracteres' })
    descripcion: string;
    
    @IsDateString({}, { message: 'La fecha debe estar en formato válido (YYYY-MM-DD)' })
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    fecha: Date;
    
    @IsNumber({}, { message: 'El monto debe ser un número válido' })
    @IsNotEmpty({ message: 'El monto es obligatorio' })
    monto: number;
    
    @IsNumber({}, { message: 'La paridad debe ser un número válido' })
    @IsNotEmpty({ message: 'La paridad es obligatoria' })
    paridad: number;
    
    @IsNumber({}, { message: 'El monto en pesos debe ser un número válido' })
    @IsNotEmpty({ message: 'El monto en pesos es obligatorio' })
    montoPesos: number;
    
    @IsInt({ message: 'La cuenta corriente debe ser un número entero (ID de la cuenta corriente)' })
    @IsNotEmpty({ message: 'La cuenta corriente es obligatoria' })
    idCuentaCorriente: number;
}
