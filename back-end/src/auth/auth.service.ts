import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUsuarioDto: CreateUsuarioDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, salt);

    const usuario = await this.usuarioService.create({
      ...createUsuarioDto,
      password: hashedPassword,
    });

    return {
      message: 'Usuario registrado con éxito',
      usuario,
    };
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioService.findByUsername(loginDto.username);

    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const passwordValid = await bcrypt.compare(
      loginDto.password,
      usuario.password,
    );

    if (!passwordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { username: usuario.userName, sub: usuario.idUsuario };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}