import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, TrendingUp, Heart, Award, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
  const navigate = useNavigate();

  const handleApplyNow = (position: string) => {
    // Simulate application process
    alert(`Thank you for your interest in the ${position} position! You will be redirected to our application portal.`);
  };

  const handleGeneralApplication = () => {
    navigate('/contact');
  };

  const handleContactHR = () => {
    navigate('/contact');
  };

  const benefits = [
    {
      icon: <TrendingUp size={30} />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear advancement paths for professional development.'
    },
    {
      icon: <Heart size={30} />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and comprehensive benefits to support your personal and professional life.'
    },
    {
      icon: <Users size={30} />,
      title: 'Team Culture',
      description: 'Collaborative environment with experienced professionals who value teamwork and innovation.'
    },
    {
      icon: <Briefcase size={30} />,
      title: 'Exciting Projects',
      description: 'Work on diverse, challenging projects that make a real impact on communities and infrastructure.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Project Manager',
      department: 'Construction Management',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Lead complex construction projects from inception to completion, managing teams and ensuring quality delivery.'
    },
    {
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Downtown District',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Oversee on-site construction activities, ensure compliance with plans and specifications.'
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety & Compliance',
      location: 'Various Sites',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Implement and monitor safety protocols across all construction sites and ensure regulatory compliance.'
    },
    {
      title: 'Construction Foreman',
      department: 'Field Operations',
      location: 'Multiple Sites',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Supervise construction crews, coordinate daily activities, and ensure project quality standards.'
    },
    {
      title: 'Estimator',
      department: 'Pre-Construction',
      location: 'Head Office',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Prepare accurate cost estimates for construction projects and support bid preparation processes.'
    },
    {
      title: 'Quality Control Inspector',
      department: 'Quality Assurance',
      location: 'Various Sites',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Conduct quality inspections and ensure all work meets company standards and specifications.'
    }
  ];

  const companyPerks = [
    'Competitive salary and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    'Retirement savings plan with company matching',
    'Professional development and training programs',
    'Flexible work arrangements',
    'Company vehicle and equipment provided',
    'Paid time off and holidays',
    'Employee recognition programs'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team of construction professionals and be part of building the future. We offer exciting opportunities for growth and development in a dynamic industry.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Al Imran Builders?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. That's why we invest in creating an environment where talent thrives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Company Perks */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Employee Benefits & Perks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyPerks.map((perk, index) => (
                <div key={index} className="flex items-center">
                  <Award size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team of construction professionals.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  
                  <div className="lg:ml-8">
                    <button 
                      onClick={() => handleApplyNow(position.title)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full lg:w-auto font-semibold"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best talent while respecting your time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply Online</h3>
              <p className="text-gray-600">Submit your application and resume through our online portal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Review</h3>
              <p className="text-gray-600">Our HR team reviews your qualifications and experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Process</h3>
              <p className="text-gray-600">Meet with our team to discuss your skills and career goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welcome Aboard</h3>
              <p className="text-gray-600">Join our team and begin your career journey with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGeneralApplication}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Submit General Application
            </button>
            <button 
              onClick={handleContactHR}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;