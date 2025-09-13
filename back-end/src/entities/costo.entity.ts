import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Cuenta } from './cuenta.entity';

@Entity('costos')
export class Costo {
    @PrimaryGeneratedColumn()
    idCosto!: number;

    @Column({ type: 'date', nullable: false})
    fecha!: Date;

    @Column({ type: 'varchar', length: 255, nullable: false})
    descripcion!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false})
    monto!: number;

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.costos, { nullable: false })
    @JoinColumn({name: 'idCuenta'})
    cuenta!: Cuenta;

    @ManyToOne(() => Usuario, (usuario) => usuario.costos, { nullable: false })
    @JoinColumn({name: 'idUsuario'})
    usuario!: Usuario;
}
