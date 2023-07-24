import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLogin,
} from "../Middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLogin, login);
router.get("/logout", logout);

export default router;
