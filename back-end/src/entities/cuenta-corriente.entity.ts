import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { DetallePago } from "./detalle-pago.entity";
import { Venta } from "./venta.entity";

@Entity('cuentas_corriente')
export class CuentaCorriente {
    @PrimaryGeneratedColumn()
    idCuentaCorriente: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
    totalEntregas!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    saldo!: number;

    @OneToMany(() => DetallePago, detallePago => detallePago.cuentaCorriente)
    detPagos!: DetallePago[];

    @OneToOne(() => Venta, venta => venta.cuentaCorriente)
    venta!: Venta;
}
