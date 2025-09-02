import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "./marca.entity";
import { DetalleVenta } from "./detalle-venta.entity";
import { Ingreso } from "./ingreso.entity";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    idProducto!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    costo!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    precioRevendedora!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    precioProfesional!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    precioConsumidorFinal!: number;

    @Column({ type: 'int', nullable: false })
    IngresoHistorico!: number;

    @Column({ type: 'int', nullable: false })
    salidaHistorico!: number;

    @Column({ type: 'int', nullable: false })
    stock!: number;

    @ManyToOne(() => Marca, marca => marca.productos, { nullable: false })
    @JoinColumn({name: 'idMarca' })
    marca!: Marca;

    @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.producto, {nullable: false})
    detallesVenta!: DetalleVenta[];

    @OneToMany(() => Ingreso, ingreso => ingreso.producto, {nullable: false} )
    ingresos!: Ingreso[];
}