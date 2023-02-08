import { Restaurant } from './Restaurant.Entity';
import { JoinTable, ManyToOne } from 'typeorm';
import { Product } from './Product.Entity';
import { ManyToMany} from 'typeorm';
import { Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
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
    @Column({nullable: false})
    restaurant: number;

    @ManyToMany(() => Product, (product) => product.order)
    @JoinTable()
    products: Product[];


}   