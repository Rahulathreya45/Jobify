import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../Errors/customErrors.js";
import { verifyJWT } from "../Utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid");

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (...rest) => {
  return (req, res, next) => {
    if (!rest.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }

    next();
  };
};
