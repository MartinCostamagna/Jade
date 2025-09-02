import { IsString, IsNotEmpty, Length, IsInt } from "class-validator";

export class CreateCuentaDto {
    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @Length(1, 100, { message: 'El nombre no puede superar los 100 caracteres' })
    nombre: string;
    
    @IsString({ message: 'La entidad debe ser un texto' })
    @IsNotEmpty({ message: 'La entidad es obligatoria' })
    @Length(1, 50, { message: 'La entidad no puede superar los 50 caracteres' })
    entidad: string;
    
    @IsString({ message: 'El CBU debe ser un texto' })
    @IsNotEmpty({ message: 'El CBU es obligatorio' })
    @Length(1, 22, { message: 'El CBU no puede superar los 22 caracteres' })
    cbu: string;
    
    @IsString({ message: 'El alias debe ser un texto' })
    @IsNotEmpty({ message: 'El alias es obligatorio' })
    @Length(1, 30, { message: 'El alias no puede superar los 30 caracteres' })
    alias: string;
    
    @IsInt({ message: 'La moneda debe ser un número entero (ID de la moneda)' })
    @IsNotEmpty({ message: 'La moneda es obligatoria' })
    idMoneda: number;
}
