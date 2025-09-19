import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity('ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    idCiudad!: number;
    
    @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
    nombre!: string;

    @OneToMany(() => Cliente, (cliente) => cliente.ciudad)
    clientes!: Cliente[];
}
