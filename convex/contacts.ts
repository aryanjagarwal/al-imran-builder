import { action, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

// Action to send email (can use fetch)
export const sendContactEmail = action({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.string(),
    projectType: v.string(),
    budget: v.string(),
    timeline: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; contactId: Id<"contacts">; emailId: string }> => {
    // First, store the contact in the database
    const contactId: Id<"contacts"> = await ctx.runMutation(api.contacts.storeContact, args);

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${args.firstName} ${args.lastName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${args.company || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${args.projectType}</p>
      <p><strong>Budget:</strong> ${args.budget || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${args.timeline || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${args.message}</p>
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
          subject: `New Contact Form: ${args.projectType} - ${args.firstName} ${args.lastName}`,
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
      await ctx.runMutation(api.contacts.updateContactStatus, {
        contactId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, contactId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Update contact record with email error
      await ctx.runMutation(api.contacts.updateContactStatus, {
        contactId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send email');
    }
  },
});

// Mutation to store contact in database
export const storeContact = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.string(),
    projectType: v.string(),
    budget: v.string(),
    timeline: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<Id<"contacts">> => {
    const contactId = await ctx.db.insert("contacts", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      company: args.company,
      projectType: args.projectType,
      budget: args.budget,
      timeline: args.timeline,
      message: args.message,
      submittedAt: Date.now(),
      status: "new",
    });
    
    return contactId;
  },
});

// Mutation to update contact status after email attempt
export const updateContactStatus = mutation({
  args: {
    contactId: v.id("contacts"),
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
