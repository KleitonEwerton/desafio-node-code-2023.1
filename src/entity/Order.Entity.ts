import { Restaurant } from './Restaurant.Entity';
import { ManyToOne } from 'typeorm';
import { Product } from './Product.Entity';
import { ManyToMany, OneToMany } from 'typeorm';
import { Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total_value: number;

    @Column()
    client_name: string;

    @Column()
    client_city: string;

    @Column()
    client_address: string;

    @Column()
    client_phone: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.order)
    restaurant: Restaurant;

    @Column('integer', { array: true })
    products: Product[];


}   