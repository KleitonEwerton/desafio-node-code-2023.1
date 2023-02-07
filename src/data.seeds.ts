import { Restaurant } from "./entities/Restaurant.Entity";
import { Product } from "./entities/Product.Entity";
import { Response, Request } from "express";
import { AppDataSource } from "./data";
import { Order } from "./entities/Order.Entity";
import * as bcrypt from 'bcrypt';

const faker = require("faker");
const dotenv = require("dotenv");
dotenv.config();

export async function seedDatabase(req: Request, res: Response) {
  const n_seeds = parseInt(process.env.N_SEEDS) || 10;
  const orderRepository = AppDataSource.getRepository(Order);
  const productRepository = AppDataSource.getRepository(Product);
  const restaurantRepository = AppDataSource.getRepository(Restaurant);

  for (let i = 0; i < n_seeds; i++) {
    await orderRepository.save({
      name: faker.name.findName(),
      total_value: faker.datatype.number({ min: 1, max: 100000, precision: 2 }),
      client_name: faker.name.findName(),
      client_city: faker.address.city(),
      client_address: faker.address.streetAddress(),
      client_phone: faker.phone.phoneNumber(),
    });
  }

  for (let i = 0; i < n_seeds; i++) {
    productRepository.save({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      quantity: faker.datatype.number({ min: 1, max: 100 }),
      price: faker.datatype.number({ min: 1, max: 100000, precision: 2 }),
      category: faker.commerce.department(),
    });
  }

  for (let i = 0; i < n_seeds; i++) {
    const name = faker.company.companyName();
    restaurantRepository.save({
      name: name,
      email: faker.internet.email(),
      password: await bcrypt.hash(name, 10),
      category: faker.commerce.department(),
      city: faker.address.city(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
    });
  }

  return res.status(201).json({
    message: "Seeded database!",
    success: true,
  });
}
