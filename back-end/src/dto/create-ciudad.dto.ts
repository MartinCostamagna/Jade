import { IsNotEmpty, IsString } from "class-validator";


export class CreateCiudadDto {
    @IsNotEmpty({ message: 'El nombre no debe estar vacío' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    nombre: string;
}
