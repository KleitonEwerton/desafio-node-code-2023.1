import { Request, Response } from "express";
import { orderRepository } from "../repositories/Order.Repository";

export class OrderController {
  async create(req: Request, res: Response) {
    const { body } = req;
    console.log(body)
    const order = await orderRepository.save(body);
    return res.status(201).json({
      message: "Order created",
      payload: order,
      success: true,
    });
  }

  async view(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const order = await orderRepository.findOneBy({ id: id });

    if (order) {
      return res.status(200).json({
        message: "Order found",
        payload: order,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Order not found",
        id: id,
        success: false,
      });
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { body } = req;

    const order = await orderRepository.findOneBy({ id: id });
    if (order) {
      await orderRepository.update(id, body);
      return res.status(200).json({
        message: "Order updated",
        payload: order,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Order not found",
        id: id,
        success: false,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const order = await orderRepository.findOneBy({ id: id });

    if (order) {
      await orderRepository.remove(order);
      return res.status(200).json({
        message: "Order deleted",
        payload: order,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Order not found",
        id: id,
        success: false,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const orders = await orderRepository.find();
    return res.status(200).json({
      message: "Orders found",
      payload: orders,
      success: true,
    });
  }
}
