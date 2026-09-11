import { Router } from "express";
import rateLimit from "express-rate-limit";
import {
  createEnquiry,
  deleteEnquiry,
  getEnquiry,
  listEnquiries,
  updateEnquiry,
} from "../controllers/enquiry.controller.js";
import { requireAdminApiKey } from "../middleware/adminAuth.js";

const router = Router();

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { success: false, message: "Too many enquiries. Please try again later." },
});

router.post("/", enquiryLimiter, createEnquiry);
router.use(requireAdminApiKey);
router.get("/", listEnquiries);
router.get("/:id", getEnquiry);
router.patch("/:id", updateEnquiry);
router.delete("/:id", deleteEnquiry);

export default router;
