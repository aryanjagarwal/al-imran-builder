import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const send = mutation({
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
  handler: async (ctx, args) => {
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

    const data = await response.json();
    return { success: true, data };
  },
});
