import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cuenta } from "./cuenta.entity";
import { Usuario } from "./usuario.entity";

@Entity('flujos')
export class Flujo {
    @PrimaryGeneratedColumn()
    idFlujo!: number;

    @Column({ type: 'date', nullable: false })
    fecha!: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    monto!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    paridad!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    montoPesos!: number;

    @ManyToOne(() => Cuenta, cuenta => cuenta.flujos, {nullable: false})
    @JoinColumn({ name: 'idCuenta' })
    cuenta!: Cuenta;

    @ManyToOne(() => Usuario, usuario => usuario.flujos, {nullable: false})
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;
}
