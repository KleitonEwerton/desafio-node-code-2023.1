import { NextFunction, Response } from "express";
import { Request } from "express";
import { orderCreateValidationSchema, orderDeleteValidationSchema, orderUpdateValidationSchema, orderViewValidationSchema } from "../validations/Order.Validation";

export async function orderCreateValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await orderCreateValidationSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function orderUpdateValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await orderUpdateValidationSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function orderViewValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await orderViewValidationSchema.validate(req.params, { abortEarly: false });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function orderDeleteValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await orderDeleteValidationSchema.validate(req.params, { abortEarly: false });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

