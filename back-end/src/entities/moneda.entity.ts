import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cuenta } from './cuenta.entity';

@Entity('monedas')
export class Moneda {
    @PrimaryGeneratedColumn()
    idMoneda!: number;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true})
    nombre!: string;

    @Column({ type: 'varchar', length: 5, nullable: false})
    simbolo!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false})
    paridad!: number;

    @OneToMany(() => Cuenta, (cuenta) => cuenta.moneda)
    cuentas!: Cuenta[];
}
