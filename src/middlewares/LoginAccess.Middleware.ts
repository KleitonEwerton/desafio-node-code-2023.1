import { loginValidationSchema } from "../validations/LoginAccess.Validation";

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

export const LoginAccessMiddleware = async (req, res, next) => {

  try{
    await loginValidationSchema.validate(req.headers, { abortEarly: false });
  }catch(error){
    return res.status(400).send({
      message: "Invalid x-access-token in header",
      errors: error.inner,
    });
  }

  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "jwt");
    next();
  } catch (error) {
    return res.status(401).send("Invalid Token or Token Expired");
  }
};
