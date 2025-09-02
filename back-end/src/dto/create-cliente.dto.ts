import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateClienteDto {
    @IsInt({ message: 'El DNI debe ser un número entero' })
    @IsNotEmpty({ message: 'El DNI es obligatorio' })
    dni: number;
    
    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @Length(1, 100, { message: 'El nombre no puede superar los 100 caracteres' })
    nombre: string;
    
    @IsString({ message: 'La dirección debe ser un texto' })
    @IsNotEmpty({ message: 'La dirección es obligatoria' })
    @Length(1, 100, { message: 'La dirección no puede superar los 100 caracteres' })
    direccion: string;
    
    @IsString({ message: 'El teléfono debe ser un texto' })
    @IsNotEmpty({ message: 'El teléfono es obligatorio' })
    @Length(1, 20, { message: 'El teléfono no puede superar los 20 caracteres' })
    telefono: string;
    
    @IsEmail({}, { message: 'El email debe tener un formato válido' })
    @IsNotEmpty({ message: 'El email es obligatorio' })
    @Length(1, 100, { message: 'El email no puede superar los 100 caracteres' })
    email: string;
    
    @IsInt({ message: 'La ciudad debe ser un número entero (ID de la ciudad)' })
    @IsNotEmpty({ message: 'La ciudad es obligatoria' })
    idCiudad: number;
}
