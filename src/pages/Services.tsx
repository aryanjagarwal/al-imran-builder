import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Home, Factory, Wrench, Hammer, Shield, CheckCircle, Award } from 'lucide-react';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Building size={60} />,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from concept to completion, including office buildings, retail spaces, and mixed-use developments.',
      features: ['Office Buildings', 'Shopping Centers', 'Hotels & Hospitality', 'Mixed-Use Developments', 'Healthcare Facilities', 'Educational Buildings'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Home size={60} />,
      title: 'Residential Projects',
      description: 'Custom residential construction services for single-family homes, condominiums, and large-scale residential communities.',
      features: ['Custom Homes', 'Condominiums', 'Residential Communities', 'Luxury Estates', 'Townhouses', 'Affordable Housing'],
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Factory size={60} />,
      title: 'Industrial Construction',
      description: 'Specialized industrial construction for manufacturing, warehousing, and distribution facilities with advanced infrastructure.',
      features: ['Manufacturing Plants', 'Warehouses', 'Distribution Centers', 'Industrial Complexes', 'Processing Facilities', 'Cold Storage'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Wrench size={60} />,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including transportation, utilities, and public works for community development.',
      features: ['Road Construction', 'Bridge Building', 'Utility Installation', 'Public Infrastructure', 'Transportation Systems', 'Water Treatment'],
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Hammer size={60} />,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with comprehensive renovation and remodeling services for all property types.',
      features: ['Interior Renovation', 'Exterior Upgrades', 'Historic Restoration', 'Space Optimization', 'Modernization', 'Accessibility Upgrades'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Shield size={60} />,
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring quality, timeline adherence, and budget control throughout construction.',
      features: ['Design-Build', 'Construction Management', 'Quality Control', 'Safety Compliance', 'Budget Management', 'Timeline Coordination'],
      image: 'https://images.pexels.com/photos/3860809/pexels-photo-3860809.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet with you to understand your vision, requirements, and budget constraints.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Permits & Approvals',
      description: 'We handle all necessary permits and regulatory approvals for your project.'
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Expert execution with regular updates and quality control throughout the build.'
    },
    {
      step: '05',
      title: 'Final Inspection',
      description: 'Thorough quality inspection and walkthrough before project handover.'
    },
    {
      step: '06',
      title: 'Project Delivery',
      description: 'Complete project delivery with ongoing support and warranty coverage.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Construction Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction solutions delivered with excellence, innovation, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality, efficiency, and client satisfaction at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award size={60} className="mx-auto mb-6 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team bring your construction vision to life with quality craftsmanship and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;