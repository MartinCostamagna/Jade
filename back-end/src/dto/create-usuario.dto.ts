import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @Length(1, 100, { message: 'El nombre no puede superar los 100 caracteres' })
  nombre: string;

  @IsString({ message: 'El usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El usuario es obligatorio' })
  @Length(1, 50, { message: 'El usuario no puede superar los 50 caracteres' })
  user: string;

  @IsString({ message: 'La contraseña debe ser un texto' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @Length(1, 30, { message: 'La contraseña no puede superar los 30 caracteres' })
  password: string;
}
