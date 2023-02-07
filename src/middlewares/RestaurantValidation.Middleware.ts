import {
  restaurantCreateValidationSchema,
  restaurantDeleteValidationSchema,
  restaurantUpdateValidationSchema,
  restaurantViewValidationSchema,
} from "./../validations/Restaurante.Validation";
import { NextFunction, Request, Response } from "express";

export async function restaurantCreateValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await restaurantCreateValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function restaurantUpdateValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await restaurantUpdateValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function restaurantViewValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await restaurantViewValidationSchema.validate(req.params, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}

export async function restaurantDeleteValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await restaurantDeleteValidationSchema.validate(req.params, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid data",
      errors: err.inner,
    });
  }
}
