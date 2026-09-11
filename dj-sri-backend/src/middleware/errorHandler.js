import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export function notFound(req, res) {
  res.status(404).json({ success: false, message: "Route not found." });
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);

  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Please check the submitted information.",
      errors: error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
    return res.status(404).json({ success: false, message: "Enquiry not found." });
  }

  console.error(error);
  res.status(500).json({ success: false, message: "Internal server error." });
}
