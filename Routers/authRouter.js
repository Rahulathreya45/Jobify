import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLogin,
} from "../Middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});
router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLogin, login);
router.get("/logout", logout);

export default router;
