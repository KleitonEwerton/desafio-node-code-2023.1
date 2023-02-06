import { Request, Response } from "express";
import { orderRepository } from "../repositories/Order.Repository";

export default class OrderController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const order = await orderRepository.save(body);
    res.status(200).json(order);
  }

  async view(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const order = await orderRepository.findOneBy({ id: id });

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { body } = req;

    const order = await orderRepository.findOneBy({ id: id });
    if (order) {
      await orderRepository.update(id, body);
      res.status(200).json({ message: "Order updated" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  }

  async delete(req: Request, res: Response) {
    
    const id = parseInt(req.params.id);
    const order = await orderRepository.findOneBy({ id: id });

    if (order) {
      await orderRepository.remove(order);
      res.status(200).json({ message: "Order deleted" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  }

  async getAll(req: Request, res: Response) {
    const orders = await orderRepository.find();
    res.status(200).json(orders);
  }
}
