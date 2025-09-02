import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuentaCorriente } from "./cuenta-corriente.entity";


@Entity('detalle_pagos')
export class DetallePago {
    @PrimaryGeneratedColumn()
    idDetallePago!: number

    @Column({type: 'varchar', length: 255, nullable: false })
    descripcion!: string

    @Column({type: 'date', nullable: false })
    fecha!: Date
    
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false })
    monto!: number

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false })
    paridad!: number

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false })
    montoPesos!: number

    @ManyToOne(() => CuentaCorriente, (cuentaCorriente) => cuentaCorriente.detPagos, {nullable: false})
    @JoinColumn({name: 'idCuentaCorriente'})
    cuentaCorriente!: CuentaCorriente
}
