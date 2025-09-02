import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateCuentaCorrienteDto {
    @IsNumber({}, { message: 'El total de entregas debe ser un número válido' })
    @IsNotEmpty({ message: 'El total de entregas es obligatorio' })
    totalEntregas: number;
    
    @IsNumber({}, { message: 'El saldo debe ser un número válido' })
    @IsNotEmpty({ message: 'El saldo es obligatorio' })
    saldo: number;
}
