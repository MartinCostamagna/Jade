import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Venta } from "./venta.entity";

@Entity('DetallesVenta')
export class DetalleVenta {
    @PrimaryGeneratedColumn()
    idDetalleVenta!: number;

    @Column({type: 'int'})
    cantidad!: number;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    precioUnitario!: number;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    subtotal!: number;

    @ManyToOne(() => Venta, venta => venta.detallesVenta, {nullable: false})
    @JoinColumn({name: 'idVenta'})
    venta!: Venta;

    @ManyToOne(() => Producto, producto => producto.detallesVenta, {nullable: false})
    @JoinColumn({name: 'idProducto'})
    producto!: Producto;
}
