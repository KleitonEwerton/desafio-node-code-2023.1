import { Order } from "./Order.Entity";
import { Restaurant } from "./Restaurant.Entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.products)
  restaurant: Restaurant;

  @ManyToMany(() => Order, (order) => order.products)
  order: Order[];
  

}
