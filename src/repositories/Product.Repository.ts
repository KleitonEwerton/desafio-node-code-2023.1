import { Product } from './../entities/Product.Entity';
import { AppDataSource } from './../data';

export const productRepository = AppDataSource.getRepository(Product);