import { LoginController } from './controllers/Login.Controller';
import { Router } from 'express'
import { seedDatabase } from './data.seeds';
import { ProductController } from './controllers/Product.Controller';
import { OrderController } from './controllers/Order.Controller';
import { RestaurantController } from './controllers/Restaurant.Controller';
import { productCreateValidationMidleware, productDeleteValidationMidleware, productUpdateValidationMidleware, productViewValidationMidleware } from './middlewares/ProductValidation.Middleware';
import { orderCreateValidationMiddleware, orderDeleteValidationMiddleware, orderUpdateValidationMiddleware, orderViewValidationMiddleware } from './middlewares/OrderValidation.Middleware';
import { restaurantCreateValidationMiddleware, restaurantDeleteValidationMiddleware, restaurantUpdateValidationMiddleware, restaurantViewValidationMiddleware } from './middlewares/RestaurantValidation.Middleware';
import { LoginMiddleware } from './middlewares/Login.Middleware';

//Routes controller
const routes = Router()

// Product routes
routes.post("/product/create", LoginMiddleware ,productCreateValidationMidleware,new ProductController().create)
routes.get("/product/view/:id", productViewValidationMidleware,new ProductController().view)
routes.put("/product/update/:id",productUpdateValidationMidleware, new ProductController().update)
routes.delete("/product/delete/:id", productDeleteValidationMidleware,new ProductController().delete)
routes.get("/products", new ProductController().getAll)

// Order routes
routes.post("/order/create", orderCreateValidationMiddleware,new OrderController().create)
routes.get("/order/view/:id", orderViewValidationMiddleware,new OrderController().view)
routes.put("/order/update/:id", orderUpdateValidationMiddleware,new OrderController().update)
routes.delete("/order/delete/:id", orderDeleteValidationMiddleware,new OrderController().delete)
routes.get("/orders", new OrderController().getAll)

// Restaurant routes
routes.post("/restaurant/create", restaurantCreateValidationMiddleware,new RestaurantController().create)
routes.get("/restaurant/view/:id", restaurantViewValidationMiddleware,new RestaurantController().view)
routes.put("/restaurant/update/:id", restaurantUpdateValidationMiddleware,new RestaurantController().update)
routes.delete("/restaurant/delete/:id", restaurantDeleteValidationMiddleware,new RestaurantController().delete)
routes.get("/restaurants", new RestaurantController().getAll)

// Login routes
routes.post("/login", new LoginController().login)

// Seed database routes
routes.post("/seedDataBase", seedDatabase)

// Documentation routes

export default routes
