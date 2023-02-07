import { NextFunction, Request, Response } from "express";
import {
  productCreateValadationSchema,
  productDeleteValadationSchema,
  productUpdateValadationSchema,
  productViewValadationSchema,
} from "../validations/Product.Validation";

export async function productCreateValidationMidleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await productCreateValadationSchema.validate(req.body, {
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

export async function productUpdateValidationMidleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await productUpdateValadationSchema.validate(req.body, {
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

export async function productViewValidationMidleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await productViewValadationSchema.validate(req.params, {
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

export async function productDeleteValidationMidleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await productDeleteValadationSchema.validate(req.params, {
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
