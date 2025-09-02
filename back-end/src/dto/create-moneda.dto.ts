import { IsString, IsNotEmpty, Length, IsNumber } from "class-validator";

export class CreateMonedaDto {
    @IsString({ message: 'El nombre de la moneda debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la moneda es obligatorio' })
    @Length(1, 50, { message: 'El nombre de la moneda no puede superar los 50 caracteres' })
    nombre: string;
    
    @IsString({ message: 'El símbolo de la moneda debe ser un texto' })
    @IsNotEmpty({ message: 'El símbolo de la moneda es obligatorio' })
    @Length(1, 5, { message: 'El símbolo de la moneda no puede superar los 5 caracteres' })
    simbolo: string;
    
    @IsNumber({}, { message: 'La paridad debe ser un número válido' })
    @IsNotEmpty({ message: 'La paridad es obligatoria' })
    paridad: number;
}
