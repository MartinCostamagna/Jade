import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producto } from './producto.entity';
import { Usuario } from './usuario.entity';

@Entity('ingresos')
export class Ingreso {
    @PrimaryGeneratedColumn()
    idIngreso!: number;

    @Column({type: 'date', nullable: false})
    fecha!: Date;

    @Column({type: 'int', nullable: false})
    cantidad!: number;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    precioUnitario!: number;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    total!: number;

    @ManyToOne(() => Producto, producto => producto.ingresos, {eager: true, nullable: false})
    @JoinColumn({name: 'idProducto'})
    producto!: Producto;

    @ManyToOne(() => Usuario, usuario => usuario.ingresos, {eager: true, nullable: false})
    @JoinColumn({name: 'idUsuario'})
    usuario!: Usuario;
}
