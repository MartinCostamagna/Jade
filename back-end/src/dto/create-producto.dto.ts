import { IsString, IsNotEmpty, Length, IsNumber, IsInt } from "class-validator";

export class CreateProductoDto {
    @IsString({ message: 'La descripción del producto debe ser un texto' })
    @IsNotEmpty({ message: 'La descripción es obligatoria' })
    @Length(1, 255, { message: 'La descripción no puede superar los 255 caracteres' })
    descripcion: string;
    
    @IsNumber({}, { message: 'El costo debe ser un número válido' })
    @IsNotEmpty({ message: 'El costo es obligatorio' })
    costo: number;
    
    @IsNumber({}, { message: 'El precio para revendedora debe ser un número válido' })
    @IsNotEmpty({ message: 'El precio para revendedora es obligatorio' })
    precioRevendedora: number;
    
    @IsNumber({}, { message: 'El precio para profesional debe ser un número válido' })
    @IsNotEmpty({ message: 'El precio para profesional es obligatorio' })
    precioProfesional: number;
    
    @IsNumber({}, { message: 'El precio para consumidor final debe ser un número válido' })
    @IsNotEmpty({ message: 'El precio para consumidor final es obligatorio' })
    precioConsumidorFinal: number;
    
    @IsInt({ message: 'El ingreso histórico debe ser un número entero' })
    @IsNotEmpty({ message: 'El ingreso histórico es obligatorio' })
    IngresoHistorico: number;
    
    @IsInt({ message: 'La salida histórica debe ser un número entero' })
    @IsNotEmpty({ message: 'La salida histórica es obligatoria' })
    salidaHistorico: number;
    
    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsNotEmpty({ message: 'El stock es obligatorio' })
    stock: number;
    
    @IsInt({ message: 'La marca debe ser un número entero (ID de la marca)' })
    @IsNotEmpty({ message: 'La marca es obligatoria' })
    idMarca: number;
}
