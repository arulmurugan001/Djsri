-- CreateEnum
CREATE TYPE "public"."EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'CONFIRMED', 'CLOSED');

-- CreateTable
CREATE TABLE "public"."Enquiry" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "eventType" VARCHAR(100) NOT NULL,
    "message" TEXT NOT NULL,
    "status" "public"."EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Enquiry_status_idx" ON "public"."Enquiry"("status");

-- CreateIndex
CREATE INDEX "Enquiry_createdAt_idx" ON "public"."Enquiry"("createdAt");
