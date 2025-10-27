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
    // Contact form fields
    course: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_submitted_at", ["submittedAt"])
    .index("by_status", ["status"]),

  jobApplications: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    location: v.string(),
    experience: v.string(),
    education: v.string(),
    specialization: v.string(),
    expectedSalary: v.optional(v.string()),
    preferredLocation: v.optional(v.string()),
    workType: v.optional(v.string()),
    availability: v.optional(v.string()),
    summary: v.optional(v.string()),
    skills: v.array(v.string()),
    portfolio: v.optional(v.string()),
    submittedAt: v.number(),
    status: v.string(),
    emailSent: v.optional(v.boolean()),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_submitted_at", ["submittedAt"])
    .index("by_status", ["status"]),

  recruitmentRequests: defineTable({
    companyName: v.string(),
    recruiterName: v.string(),
    email: v.string(),
    phone: v.string(),
    companyWebsite: v.optional(v.string()),
    companySize: v.string(),
    industry: v.string(),
    companyLocation: v.string(),
    jobTitle: v.string(),
    department: v.optional(v.string()),
    jobLocation: v.string(),
    workType: v.string(),
    experienceLevel: v.string(),
    salaryRange: v.optional(v.string()),
    urgency: v.optional(v.string()),
    requiredSkills: v.array(v.string()),
    jobDescription: v.string(),
    responsibilities: v.string(),
    requirements: v.string(),
    benefits: v.optional(v.string()),
    hiringTimeline: v.optional(v.string()),
    interviewProcess: v.optional(v.string()),
    additionalInfo: v.optional(v.string()),
    submittedAt: v.number(),
    status: v.string(),
    emailSent: v.optional(v.boolean()),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_submitted_at", ["submittedAt"])
    .index("by_status", ["status"]),

  schoolContact: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    subject: v.string(),
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

  schoolAdmissions: defineTable({
    studentName: v.string(),
    email: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
    gender: v.string(),
    address: v.string(),
    guardianName: v.string(),
    guardianPhone: v.string(),
    previousSchool: v.optional(v.string()),
    grade: v.string(),
    message: v.optional(v.string()),
    submittedAt: v.number(),
    status: v.string(),
    emailSent: v.optional(v.boolean()),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_submitted_at", ["submittedAt"])
    .index("by_status", ["status"])
    .index("by_grade", ["grade"]),
});
