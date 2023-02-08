import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppDataSource } from "../data";
import { Restaurant } from "../entities/Restaurant.Entity";
import * as bcrypt from "bcrypt";

const dotenv = require("dotenv");
dotenv.config();
export class LoginController {
	async login(req: Request, res: Response) {
		const email = req.body.email;
		const password = req.body.password;

		const restaurant = await AppDataSource.getRepository(Restaurant).findOne({
			where: { email: email },
		});

		if (!restaurant)
			return res.status(401).json({
				message: "Email or password is incorrect",
				success: false,
			});
		const token = jwt.sign({ email: email }, process.env.JWT_SECRET || "jwt");

		const isPasswordMatching = await bcrypt.compare(password, restaurant.password);
		if (!isPasswordMatching) {
			return res.status(401).json({
				message: "Email or password is incorrect",
				success: false,
			});
		}
    
		return res.status(200).json({
			message: "Login successful",
			token: token,
			success: true,
		});
	}
}
