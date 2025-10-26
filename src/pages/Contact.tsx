import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

const ContactPage = () => {
  const navigate = useNavigate();
  const sendContactEmail = useAction(api.contacts.sendContactEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
      });
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleConsultation = () => {
    alert('You will be redirected to our scheduling system to book a consultation.');
  };

  const handleDownloadBrochure = () => {
    alert('Company brochure download will begin shortly. Thank you for your interest!');
  };

  const offices = [
    {
      name: 'Headquarters',
      address: 'Address: 13-6-431/C/52, PVNR Express Way, Pillar No. 102, Ring Road,, Mehdipatnam, Hyderabad, Telangana 500067',
      phone: '+91 95812 19373',
      email: 'info@alimranbuildersanddevelopers.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM\nSun: Emergency only'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our team for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare size={30} className="text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="residential">Residential Project</option>
                        <option value="industrial">Industrial Construction</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="renovation">Renovation & Remodeling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-100k">Under $100K</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-plus">$5M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (Within 1 month)</option>
                      <option value="short">Short-term (1-3 months)</option>
                      <option value="medium">Medium-term (3-6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please describe your project requirements, location, and any specific needs..."
                      required
                    ></textarea>
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                      <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="font-semibold text-green-900">Message Sent Successfully!</h4>
                        <p className="text-green-700 text-sm">Thank you {formData.firstName}! We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="font-semibold text-red-900">Failed to Send Message</h4>
                        <p className="text-red-700 text-sm">Please try again or contact us directly at +91 95812 19373</p>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                          <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                          <p className="text-gray-600 whitespace-pre-line">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to discuss your project and provide expert guidance from concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleConsultation}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={handleDownloadBrochure}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;