import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";


@Entity('marcas')
export class Marca {
    @PrimaryGeneratedColumn()
    idMarca!: number;

    @Column({type: 'varchar', length: 100, unique: true, nullable: false})
    nombre!: string;

    @OneToMany(() => Producto, producto => producto.marca)
    productos!: Producto[];
}
