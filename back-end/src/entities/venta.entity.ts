import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Cliente } from "./cliente.entity";
import { CuentaCorriente } from "./cuenta-corriente.entity";
import { DetalleVenta } from "./detalle-venta.entity";

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn()
    idVenta!: number;

    @Column({ type: 'date', nullable: false })
    fecha!: Date;

    @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
    numeroFactura!: string;

    @Column({ type: 'decimal', precision: 10, scale:2 , nullable: false })
    total!: number;

    @ManyToOne(() => Usuario, usuario => usuario.ventas, {nullable: false})
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;

    @ManyToOne(() => Cliente, cliente => cliente.ventas, {nullable: false})
    @JoinColumn({ name: 'dni' })
    cliente!: Cliente;

    @OneToOne(() => CuentaCorriente, cuentaCorriente => cuentaCorriente.venta, {nullable: false})
    @JoinColumn({name: 'idCuentaCorriente'})
    cuentaCorriente!: CuentaCorriente;

    @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.venta)
    detallesVenta!: DetalleVenta[];
}
