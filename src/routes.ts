import { RestaurantController } from './controllers/Restaurant.Controller';
import { OrderController } from './controllers/Order.Controller';
import { ProductController } from './controllers/Product.Controller';
import { Router } from 'express'
import { seedDatabase } from './data.seeds';
import { orderValidationMiddleware } from './middlewares/OrderValidation.Middleware';
import { productValidationMidleware } from './middlewares/ProductValidation.Middleware';

//Routes controller
const routes = Router()

// Product routes
routes.post("/product/create", productValidationMidleware,new ProductController().create)
routes.get("/product/view/:id", new ProductController().view)
routes.put("/product/update/:id",productValidationMidleware, new ProductController().update)
routes.delete("/product/delete/:id", new ProductController().delete)
routes.get("/products", new ProductController().getAll)

// Order routes
routes.post("/order/create", orderValidationMiddleware,new OrderController().create)
routes.get("/order/view/:id", new OrderController().view)
routes.put("/order/update/:id", orderValidationMiddleware,new OrderController().update)
routes.delete("/order/delete/:id", new OrderController().delete)
routes.get("/orders", new OrderController().getAll)

// Restaurant routes
routes.post("/restaurant/create", new RestaurantController().create)
routes.get("/restaurant/view/:id", new RestaurantController().view)
routes.put("/restaurant/update/:id", new RestaurantController().update)
routes.delete("/restaurant/delete/:id", new RestaurantController().delete)
routes.get("/restaurants", new RestaurantController().getAll)

// Login routes

// Seed database routes
routes.post("/seedDataBase", seedDatabase)

// Documentation routes

export default routes
