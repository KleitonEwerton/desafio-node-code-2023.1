import { Order } from './../entities/Order.Entity';
import { AppDataSource } from "../data";

export const orderRepository = AppDataSource.getRepository(Order);

