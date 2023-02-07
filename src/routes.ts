import OrderController from './controllers/Order.Controller';
import { ProductController } from './controllers/Product.Controller';
import { Router } from 'express'
import RestaurantController from './controllers/Restaurant.Controller';

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

// Product routes
routes.post("/product/create", new ProductController().create)
routes.get("/product/view/:id", new ProductController().view)
routes.put("/product/update/:id", new ProductController().update)
routes.delete("/product/delete/:id", new ProductController().remove)
routes.get("products", new ProductController().getAll)

// Order routes
routes.post("/order/create", new OrderController().create)
routes.get("/order/view/:id", new OrderController().view)
routes.put("/order/update/:id", new OrderController().update)
routes.delete("/order/delete/:id", new OrderController().remove)
routes.get("orders", new OrderController().getAll)

// Restaurant routes
routes.post("/restaurant/create", new RestaurantController().create)
routes.get("/restaurant/view/:id", new RestaurantController().view)
routes.put("/restaurant/update/:id", new RestaurantController().update)
routes.delete("/restaurant/delete/:id", new RestaurantController().remove)
routes.get("restaurants", new RestaurantController().getAll)

// Login routes

// Documentation routes

export default routes
