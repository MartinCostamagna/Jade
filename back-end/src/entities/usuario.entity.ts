import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flujo } from "./flujo.entity";
import { Costo } from "./costo.entity";
import { Venta } from "./venta.entity";
import { Ingreso } from "./ingreso.entity"


@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario!: number;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    userName!: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    password!: string;

    @OneToMany(() => Ingreso, ingreso => ingreso.usuario)
    ingresos!: Ingreso[];

    @OneToMany(() => Venta, venta => venta.usuario)
    ventas!: Venta[];

    @OneToMany(() => Flujo, flujo => flujo.usuario)
    flujos!: Flujo[];
    
    @OneToMany(() => Costo, costos => costos.usuario)
    costos!: Costo[];
}
