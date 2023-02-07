import { orderValidationSchema } from "./../validations/Order.Validation";
import { NextFunction, Response } from "express";
import { Request } from "express";

export async function orderValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await orderValidationSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Dados inválidos",
      errors: err.inner,
    });
  }
}
