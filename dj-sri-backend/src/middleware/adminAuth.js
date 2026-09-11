import { timingSafeEqual } from "node:crypto";
import { env } from "../config/env.js";

export function requireAdminApiKey(req, res, next) {
  const suppliedKey = req.get("x-admin-api-key") || "";
  const expectedKey = env.adminApiKey;

  if (!expectedKey) {
    return res.status(503).json({
      success: false,
      message: "Admin access is not configured.",
    });
  }

  const supplied = Buffer.from(suppliedKey);
  const expected = Buffer.from(expectedKey);
  const valid = supplied.length === expected.length && timingSafeEqual(supplied, expected);

  if (!valid) {
    return res.status(401).json({ success: false, message: "Unauthorized." });
  }

  next();
}
