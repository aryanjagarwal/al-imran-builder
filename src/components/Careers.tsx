import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, TrendingUp, Heart } from 'lucide-react';

const Careers = () => {
  const navigate = useNavigate();

  const handleApplyNow = (position: string) => {
    navigate('/careers');
  };

  const handleGeneralApplication = () => {
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
      title: 'Project Manager',
      department: 'Construction Management',
      location: 'Multiple Locations',
      type: 'Full-time'
    },
    {
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Downtown District',
      type: 'Full-time'
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety & Compliance',
      location: 'Various Sites',
      type: 'Full-time'
    },
    {
      title: 'Construction Foreman',
      department: 'Field Operations',
      location: 'Multiple Sites',
      type: 'Full-time'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build Your Career With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of construction professionals and be part of building the future. We offer exciting opportunities for growth and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Current Openings</h3>
            <p className="text-blue-100">Explore exciting career opportunities with Al Imran Builders</p>
          </div>
          <div className="divide-y divide-gray-200">
            {openPositions.map((position, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h4>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {position.location}
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded w-fit">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
                    Apply Now
                  </button>
                  <button 
                    onClick={() => handleApplyNow(position.title)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see a position that fits? We're always looking for talented individuals.</p>
          <button 
            onClick={handleGeneralApplication}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Submit General Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;