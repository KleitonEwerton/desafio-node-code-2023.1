import { NextFunction, Request, Response } from "express";
import { loginValidationSchema } from "../validations/Login.Validation";
export async function loginValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await loginValidationSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).send({
      message: "Invalid email or password in body",
      errors: error,
    });
  }
}
