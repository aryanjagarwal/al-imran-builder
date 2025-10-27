import { action, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

// ==================== SCHOOL CONTACT FUNCTIONS ====================

// Action to handle school contact form submissions with email
export const submitSchoolContact = action({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; contactId: Id<"schoolContact">; emailId: string }> => {
    // First, store the contact form data in the database
    const contactId: Id<"schoolContact"> = await ctx.runMutation(api.school.storeSchoolContact, args);

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission - JJ High School</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${args.firstName} ${args.lastName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone}</p>
      <p><strong>Subject:</strong> ${args.subject}</p>
      
      <h3>Message</h3>
      <p>${args.message}</p>
      
      <hr />
      <p style="color: #666; font-size: 12px;">This message was sent from the JJ High School website contact form.</p>
    `;

    try {
      // Send email using Resend
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'info@alimranperfumes.com',
          subject: `JJ High School Contact: ${args.subject}`,
          html: emailContent,
          reply_to: args.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      const emailData = await response.json();
      
      // Update contact record with email sent status
      await ctx.runMutation(api.school.updateSchoolContactStatus, {
        contactId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, contactId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending school contact email:', error);
      
      // Update contact record with email error
      await ctx.runMutation(api.school.updateSchoolContactStatus, {
        contactId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send school contact email');
    }
  },
});

// Mutation to store school contact in database
export const storeSchoolContact = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<Id<"schoolContact">> => {
    const contactId = await ctx.db.insert("schoolContact", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      subject: args.subject,
      message: args.message,
      submittedAt: Date.now(),
      status: "pending",
    });
    
    return contactId;
  },
});

// Mutation to update school contact status after email attempt
export const updateSchoolContactStatus = mutation({
  args: {
    contactId: v.id("schoolContact"),
    emailSent: v.boolean(),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.patch(args.contactId, {
      emailSent: args.emailSent,
      emailId: args.emailId,
      emailError: args.emailError,
    });
  },
});

// ==================== SCHOOL ADMISSION FUNCTIONS ====================

// Action to handle school admission form submissions with email
export const submitSchoolAdmission = action({
  args: {
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
  },
  handler: async (ctx, args): Promise<{ success: boolean; admissionId: Id<"schoolAdmissions">; emailId: string }> => {
    // First, store the admission form data in the database
    const admissionId: Id<"schoolAdmissions"> = await ctx.runMutation(api.school.storeSchoolAdmission, args);

    // Prepare email content
    const emailContent = `
      <h2>New Admission Application - JJ High School</h2>
      
      <h3>Student Information</h3>
      <p><strong>Student Name:</strong> ${args.studentName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone}</p>
      <p><strong>Date of Birth:</strong> ${args.dateOfBirth}</p>
      <p><strong>Gender:</strong> ${args.gender}</p>
      <p><strong>Address:</strong> ${args.address}</p>
      
      <h3>Guardian Information</h3>
      <p><strong>Guardian Name:</strong> ${args.guardianName}</p>
      <p><strong>Guardian Phone:</strong> ${args.guardianPhone}</p>
      
      <h3>Academic Information</h3>
      <p><strong>Grade/Course:</strong> ${args.grade}</p>
      <p><strong>Previous School:</strong> ${args.previousSchool || 'Not specified'}</p>
      
      <h3>Additional Message</h3>
      <p>${args.message || 'No additional message provided'}</p>
      
      <hr />
      <p style="color: #666; font-size: 12px;">This application was submitted through the JJ High School website admission form.</p>
    `;

    try {
      // Send email using Resend
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'info@alimranperfumes.com',
          subject: `New Admission Application: ${args.grade} - ${args.studentName}`,
          html: emailContent,
          reply_to: args.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      const emailData = await response.json();
      
      // Update admission record with email sent status
      await ctx.runMutation(api.school.updateSchoolAdmissionStatus, {
        admissionId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, admissionId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending school admission email:', error);
      
      // Update admission record with email error
      await ctx.runMutation(api.school.updateSchoolAdmissionStatus, {
        admissionId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send school admission email');
    }
  },
});

// Mutation to store school admission in database
export const storeSchoolAdmission = mutation({
  args: {
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
  },
  handler: async (ctx, args): Promise<Id<"schoolAdmissions">> => {
    const admissionId = await ctx.db.insert("schoolAdmissions", {
      studentName: args.studentName,
      email: args.email,
      phone: args.phone,
      dateOfBirth: args.dateOfBirth,
      gender: args.gender,
      address: args.address,
      guardianName: args.guardianName,
      guardianPhone: args.guardianPhone,
      previousSchool: args.previousSchool,
      grade: args.grade,
      message: args.message,
      submittedAt: Date.now(),
      status: "pending",
    });
    
    return admissionId;
  },
});

// Mutation to update school admission status after email attempt
export const updateSchoolAdmissionStatus = mutation({
  args: {
    admissionId: v.id("schoolAdmissions"),
    emailSent: v.boolean(),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.patch(args.admissionId, {
      emailSent: args.emailSent,
      emailId: args.emailId,
      emailError: args.emailError,
    });
  },
});
