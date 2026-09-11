import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import enquiryRoutes from "./routes/enquiry.routes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.clientUrls.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS."));
    },
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);

app.use(express.json({ limit: "100kb" }));

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the DJ Sri Backend API.",
  });
});

// Health-check route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "DJ Sri API is running.",
  });
});

// Enquiry routes
app.use("/api/enquiries", enquiryRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;