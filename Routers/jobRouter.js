import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../Middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
