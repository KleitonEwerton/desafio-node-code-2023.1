import { NextFunction, Request, Response } from "express";
import { restaurantValidationSchema } from "../validations/Restaurante.Validation";

export async function restaurantValidationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        await restaurantValidationSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        res.status(400).send({
            message: "Dados inválidos",
            errors: err.inner,
        });
    }
}