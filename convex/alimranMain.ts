import { action, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

// ==================== JOB APPLICATION FUNCTIONS ====================

// Action to submit job application and send email
export const applyJob = action({
  args: {
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
  },
  handler: async (ctx, args): Promise<{ success: boolean; applicationId: Id<"jobApplications">; emailId: string }> => {
    // First, store the job application in the database
    const applicationId: Id<"jobApplications"> = await ctx.runMutation(api.alimranMain.storeJobApplication, args);

    // Prepare email content
    const emailContent = `
      <h2>New Job Application Submission</h2>
      <h3>Personal Information</h3>
      <p><strong>Full Name:</strong> ${args.fullName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone}</p>
      <p><strong>Current Location:</strong> ${args.location}</p>
      
      <h3>Professional Information</h3>
      <p><strong>Years of Experience:</strong> ${args.experience}</p>
      <p><strong>Highest Education:</strong> ${args.education}</p>
      <p><strong>MEP Specialization:</strong> ${args.specialization}</p>
      <p><strong>Expected Salary:</strong> ${args.expectedSalary || 'Not specified'}</p>
      
      <h3>Job Preferences</h3>
      <p><strong>Preferred Work Location:</strong> ${args.preferredLocation || 'Not specified'}</p>
      <p><strong>Work Type Preference:</strong> ${args.workType || 'Not specified'}</p>
      <p><strong>Availability to Start:</strong> ${args.availability || 'Not specified'}</p>
      
      <h3>Technical Skills</h3>
      <p>${args.skills.length > 0 ? args.skills.join(', ') : 'None specified'}</p>
      
      <h3>Professional Summary</h3>
      <p>${args.summary || 'Not provided'}</p>
      
      <h3>Portfolio/LinkedIn</h3>
      <p>${args.portfolio || 'Not provided'}</p>
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
          subject: `New Job Application: ${args.specialization} - ${args.fullName}`,
          html: emailContent,
          reply_to: args.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      const emailData = await response.json();
      
      // Update application record with email sent status
      await ctx.runMutation(api.alimranMain.updateJobApplicationStatus, {
        applicationId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, applicationId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending job application email:', error);
      
      // Update application record with email error
      await ctx.runMutation(api.alimranMain.updateJobApplicationStatus, {
        applicationId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send job application email');
    }
  },
});

// Mutation to store job application in database
export const storeJobApplication = mutation({
  args: {
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
  },
  handler: async (ctx, args): Promise<Id<"jobApplications">> => {
    const applicationId = await ctx.db.insert("jobApplications", {
      fullName: args.fullName,
      email: args.email,
      phone: args.phone,
      location: args.location,
      experience: args.experience,
      education: args.education,
      specialization: args.specialization,
      expectedSalary: args.expectedSalary,
      preferredLocation: args.preferredLocation,
      workType: args.workType,
      availability: args.availability,
      summary: args.summary,
      skills: args.skills,
      portfolio: args.portfolio,
      submittedAt: Date.now(),
      status: "new",
    });
    
    return applicationId;
  },
});

// Mutation to update job application status after email attempt
export const updateJobApplicationStatus = mutation({
  args: {
    applicationId: v.id("jobApplications"),
    emailSent: v.boolean(),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.patch(args.applicationId, {
      emailSent: args.emailSent,
      emailId: args.emailId,
      emailError: args.emailError,
    });
  },
});

// ==================== RECRUITMENT REQUEST FUNCTIONS ====================

// Action to submit recruitment request and send email
export const postRecruitment = action({
  args: {
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
  },
  handler: async (ctx, args): Promise<{ success: boolean; recruitmentId: Id<"recruitmentRequests">; emailId: string }> => {
    // First, store the recruitment request in the database
    const recruitmentId: Id<"recruitmentRequests"> = await ctx.runMutation(api.alimranMain.storeRecruitmentRequest, args);

    // Prepare email content
    const emailContent = `
      <h2>New Recruitment Request</h2>
      
      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${args.companyName}</p>
      <p><strong>Recruiter Name:</strong> ${args.recruiterName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone}</p>
      <p><strong>Company Website:</strong> ${args.companyWebsite || 'Not provided'}</p>
      <p><strong>Company Size:</strong> ${args.companySize}</p>
      <p><strong>Industry:</strong> ${args.industry}</p>
      <p><strong>Company Location:</strong> ${args.companyLocation}</p>
      
      <h3>Job Details</h3>
      <p><strong>Job Title:</strong> ${args.jobTitle}</p>
      <p><strong>Department:</strong> ${args.department || 'Not specified'}</p>
      <p><strong>Job Location:</strong> ${args.jobLocation}</p>
      <p><strong>Work Type:</strong> ${args.workType}</p>
      <p><strong>Experience Level:</strong> ${args.experienceLevel}</p>
      <p><strong>Salary Range:</strong> ${args.salaryRange || 'Not specified'}</p>
      <p><strong>Urgency:</strong> ${args.urgency || 'Not specified'}</p>
      <p><strong>Hiring Timeline:</strong> ${args.hiringTimeline || 'Not specified'}</p>
      
      <h3>Required Skills</h3>
      <p>${args.requiredSkills.length > 0 ? args.requiredSkills.join(', ') : 'None specified'}</p>
      
      <h3>Job Description</h3>
      <p>${args.jobDescription}</p>
      
      <h3>Key Responsibilities</h3>
      <p>${args.responsibilities}</p>
      
      <h3>Requirements</h3>
      <p>${args.requirements}</p>
      
      <h3>Benefits & Perks</h3>
      <p>${args.benefits || 'Not provided'}</p>
      
      <h3>Interview Process</h3>
      <p>${args.interviewProcess || 'Not provided'}</p>
      
      <h3>Additional Information</h3>
      <p>${args.additionalInfo || 'Not provided'}</p>
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
          subject: `New Recruitment Request: ${args.jobTitle} - ${args.companyName}`,
          html: emailContent,
          reply_to: args.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      const emailData = await response.json();
      
      // Update recruitment request record with email sent status
      await ctx.runMutation(api.alimranMain.updateRecruitmentRequestStatus, {
        recruitmentId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, recruitmentId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending recruitment request email:', error);
      
      // Update recruitment request record with email error
      await ctx.runMutation(api.alimranMain.updateRecruitmentRequestStatus, {
        recruitmentId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send recruitment request email');
    }
  },
});

// Mutation to store recruitment request in database
export const storeRecruitmentRequest = mutation({
  args: {
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
  },
  handler: async (ctx, args): Promise<Id<"recruitmentRequests">> => {
    const recruitmentId = await ctx.db.insert("recruitmentRequests", {
      companyName: args.companyName,
      recruiterName: args.recruiterName,
      email: args.email,
      phone: args.phone,
      companyWebsite: args.companyWebsite,
      companySize: args.companySize,
      industry: args.industry,
      companyLocation: args.companyLocation,
      jobTitle: args.jobTitle,
      department: args.department,
      jobLocation: args.jobLocation,
      workType: args.workType,
      experienceLevel: args.experienceLevel,
      salaryRange: args.salaryRange,
      urgency: args.urgency,
      requiredSkills: args.requiredSkills,
      jobDescription: args.jobDescription,
      responsibilities: args.responsibilities,
      requirements: args.requirements,
      benefits: args.benefits,
      hiringTimeline: args.hiringTimeline,
      interviewProcess: args.interviewProcess,
      additionalInfo: args.additionalInfo,
      submittedAt: Date.now(),
      status: "new",
    });
    
    return recruitmentId;
  },
});

// Mutation to update recruitment request status after email attempt
export const updateRecruitmentRequestStatus = mutation({
  args: {
    recruitmentId: v.id("recruitmentRequests"),
    emailSent: v.boolean(),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.patch(args.recruitmentId, {
      emailSent: args.emailSent,
      emailId: args.emailId,
      emailError: args.emailError,
    });
  },
});

// ==================== CONTACT/QUERY FUNCTIONS ====================

// Action to submit query and send email
export const postQuery = action({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    course: v.optional(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<{ success: boolean; queryId: Id<"contacts">; emailId: string }> => {
    // First, store the query in the database
    const queryId: Id<"contacts"> = await ctx.runMutation(api.alimranMain.storeQuery, args);

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Query</h2>
      <p><strong>Name:</strong> ${args.firstName} ${args.lastName}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Phone:</strong> ${args.phone}</p>
      <p><strong>Course Interest:</strong> ${args.course || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${args.message || 'No message provided'}</p>
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
          subject: `New Contact Query: ${args.course || 'General'} - ${args.firstName} ${args.lastName}`,
          html: emailContent,
          reply_to: args.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      const emailData = await response.json();
      
      // Update query record with email sent status
      await ctx.runMutation(api.alimranMain.updateQueryStatus, {
        queryId,
        emailSent: true,
        emailId: emailData.id,
      });

      return { success: true, queryId, emailId: emailData.id };
    } catch (error) {
      console.error('Error sending query email:', error);
      
      // Update query record with email error
      await ctx.runMutation(api.alimranMain.updateQueryStatus, {
        queryId,
        emailSent: false,
        emailError: error instanceof Error ? error.message : 'Unknown error',
      });

      throw new Error('Failed to send query email');
    }
  },
});

// Mutation to store query in database
export const storeQuery = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    course: v.optional(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<Id<"contacts">> => {
    const queryId = await ctx.db.insert("contacts", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      course: args.course,
      company: "", // Required field, empty for queries
      projectType: args.course || "General Query", // Use course as project type
      budget: "", // Required field, empty for queries
      timeline: "", // Required field, empty for queries
      message: args.message || "",
      submittedAt: Date.now(),
      status: "new",
    });
    
    return queryId;
  },
});

// Mutation to update query status after email attempt
export const updateQueryStatus = mutation({
  args: {
    queryId: v.id("contacts"),
    emailSent: v.boolean(),
    emailId: v.optional(v.string()),
    emailError: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.patch(args.queryId, {
      emailSent: args.emailSent,
      emailId: args.emailId,
      emailError: args.emailError,
    });
  },
});
