import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Moneda } from "./moneda.entity";
import { Costo } from "./costo.entity";
import { Flujo } from "./flujo.entity";

@Entity('cuentas')
export class Cuenta {
    @PrimaryGeneratedColumn()
    idCuenta!: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true})
    nombre!: string;

    @Column({ type: 'varchar', length: 50, nullable: false})
    entidad!: string;

    @Column({ type: 'varchar', length: 22, nullable: false})
    cbu!: string;

    @Column({ type: 'varchar', length: 30, nullable: false})
    alias!: string;

    @ManyToOne(() => Moneda, (moneda) => moneda.cuentas, { nullable: false })
    @JoinColumn({name: 'idMoneda'})
    moneda!: Moneda;

    @OneToMany(() => Costo, (costo) => costo.cuenta)
    costos!: Costo[];

    @OneToMany(() => Flujo, (flujo) => flujo.cuenta)
    flujos!: Flujo[];
}
