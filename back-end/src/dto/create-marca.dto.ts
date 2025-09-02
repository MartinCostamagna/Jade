import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreateMarcaDto {
    @IsString({ message: 'El nombre de la marca debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la marca es obligatorio' })
    @Length(1, 100, { message: 'El nombre de la marca no puede superar los 100 caracteres' })
    nombre: string;
}   
