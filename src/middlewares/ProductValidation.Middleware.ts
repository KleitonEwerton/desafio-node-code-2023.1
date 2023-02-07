import { NextFunction, Request, Response } from 'express';
import { productValadationSchema } from './../validations/Product.Validation';

export async function productValidationMidleware(req: Request, res: Response, next: NextFunction) {
    try {
        await productValadationSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        res.status(400).send({
            message: "Dados inválidos",
            errors: err.inner,
        });
    }
}