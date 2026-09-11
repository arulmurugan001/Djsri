import prisma from "../config/prisma.js";
import {
  createEnquirySchema,
  enquiryIdSchema,
  updateEnquirySchema,
} from "../validators/enquiry.validator.js";

export async function createEnquiry(req, res, next) {
  try {
    const data = createEnquirySchema.parse(req.body);
    const enquiry = await prisma.enquiry.create({ data });

    res.status(201).json({
      success: true,
      message: "Your enquiry has been received.",
      data: { id: enquiry.id, createdAt: enquiry.createdAt },
    });
  } catch (error) {
    next(error);
  }
}

export async function listEnquiries(req, res, next) {
  try {
    const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 20, 1), 100);
    const allowedStatuses = ["NEW", "CONTACTED", "CONFIRMED", "CLOSED"];
    const status = allowedStatuses.includes(req.query.status) ? req.query.status : undefined;
    const where = status ? { status } : {};

    const [items, total] = await prisma.$transaction([
      prisma.enquiry.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.enquiry.count({ where }),
    ]);

    res.json({
      success: true,
      data: items,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
}

export async function getEnquiry(req, res, next) {
  try {
    const id = enquiryIdSchema.parse(req.params.id);
    const enquiry = await prisma.enquiry.findUnique({ where: { id } });

    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found." });
    }

    res.json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
}

export async function updateEnquiry(req, res, next) {
  try {
    const id = enquiryIdSchema.parse(req.params.id);
    const data = updateEnquirySchema.parse(req.body);
    const enquiry = await prisma.enquiry.update({ where: { id }, data });
    res.json({ success: true, message: "Enquiry updated.", data: enquiry });
  } catch (error) {
    next(error);
  }
}

export async function deleteEnquiry(req, res, next) {
  try {
    const id = enquiryIdSchema.parse(req.params.id);
    await prisma.enquiry.delete({ where: { id } });
    res.json({ success: true, message: "Enquiry deleted." });
  } catch (error) {
    next(error);
  }
}
