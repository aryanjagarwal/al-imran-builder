import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.string(),
    projectType: v.string(),
    budget: v.string(),
    timeline: v.string(),
    message: v.string(),
    submittedAt: v.number(),
    status: v.string(),
    emailSent: v.optional(v.boolean()),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_submitted_at", ["submittedAt"])
    .index("by_status", ["status"]),
});
