const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require('swagger-ui-express');
import { LoginController } from './controllers/Login.Controller';
import { Router} from 'express'
import { seedDatabase } from './data.seeds';
import { ProductController } from './controllers/Product.Controller';
import { OrderController } from './controllers/Order.Controller';
import { RestaurantController } from './controllers/Restaurant.Controller';
import { productCreateValidationMidleware, productDeleteValidationMidleware, productUpdateValidationMidleware, productViewValidationMidleware } from './middlewares/ProductValidation.Middleware';
import { orderCreateValidationMiddleware, orderDeleteValidationMiddleware, orderUpdateValidationMiddleware, orderViewValidationMiddleware } from './middlewares/OrderValidation.Middleware';
import { restaurantCreateValidationMiddleware, restaurantDeleteValidationMiddleware, restaurantUpdateValidationMiddleware, restaurantViewValidationMiddleware } from './middlewares/RestaurantValidation.Middleware';
import { LoginAccessMiddleware } from './middlewares/LoginAccess.Middleware';
import { loginValidationMiddleware } from './middlewares/Login.Middleware';

//Routes controller
const routes = Router()

// Product routes
routes.post("/product/create", LoginAccessMiddleware ,productCreateValidationMidleware,new ProductController().create)
routes.get("/product/view/:id", productViewValidationMidleware,new ProductController().view)
routes.put("/product/update/:id",LoginAccessMiddleware, productUpdateValidationMidleware, new ProductController().update)
routes.delete("/product/delete/:id", LoginAccessMiddleware, productDeleteValidationMidleware,new ProductController().delete)
routes.get("/products", new ProductController().getAll)

// Order routes
routes.post("/order/create", LoginAccessMiddleware,orderCreateValidationMiddleware,new OrderController().create)
routes.get("/order/view/:id", LoginAccessMiddleware,orderViewValidationMiddleware,new OrderController().view)
routes.put("/order/update/:id", LoginAccessMiddleware,orderUpdateValidationMiddleware,new OrderController().update)
routes.delete("/order/delete/:id", LoginAccessMiddleware,orderDeleteValidationMiddleware,new OrderController().delete)
routes.get("/orders", LoginAccessMiddleware, new OrderController().getAll)

// Restaurant routes
routes.post("/restaurant/create",LoginAccessMiddleware, restaurantCreateValidationMiddleware,new RestaurantController().create)
routes.get("/restaurant/view/:id", restaurantViewValidationMiddleware,new RestaurantController().view)
routes.put("/restaurant/update/:id",LoginAccessMiddleware, restaurantUpdateValidationMiddleware,new RestaurantController().update)
routes.delete("/restaurant/delete/:id",LoginAccessMiddleware, restaurantDeleteValidationMiddleware,new RestaurantController().delete)
routes.get("/restaurants", new RestaurantController().getAll)

// Login routes
routes.post("/login", loginValidationMiddleware,new LoginController().login)

// Seed database routes
routes.post("/seedDataBase", seedDatabase)

// Documentation routes
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));
export default routes
