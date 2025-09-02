import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Ciudad } from './ciudad.entity';
import { Venta } from './venta.entity';

@Entity('clientes')
export class Cliente {
    @PrimaryColumn()
    dni!: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    nombre!: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    direccion!: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    telefono!: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    email!: string;

    @ManyToOne(() => Ciudad, (ciudad) => ciudad.clientes, { eager: true, nullable: false, onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'idCiudad' })
    ciudad!: Ciudad;

    @OneToMany(() => Venta, (venta) => venta.cliente)
    ventas!: Venta[];
}
