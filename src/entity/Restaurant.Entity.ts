import { Order } from "./Order.Entity";
import { Product } from "./Product.Entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  category: string;

  @Column()
  city: string;

  @Column()
  enderess: string;

  @Column()
  phone: string;

  @OneToMany(() => Product, (product) => product.restaurant)
  products: Product[];

  @OneToMany(() => Order, (order) => order.restaurant)
  order: Order[];
}
