import { Restaurant } from './../entities/Restaurant.Entity';
import { AppDataSource } from './../data';

export const restaurantRepository = AppDataSource.getRepository(Restaurant);