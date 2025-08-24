import React from 'react';
import { Building, Home, Factory, Wrench, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building size={40} />,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and mixed-use developments with modern design and functionality.',
      features: ['Office Buildings', 'Shopping Centers', 'Hotels & Hospitality', 'Mixed-Use Developments']
    },
    {
      icon: <Home size={40} />,
      title: 'Residential Projects',
      description: 'Custom homes, condominiums, and residential communities built with attention to detail.',
      features: ['Custom Homes', 'Condominiums', 'Residential Communities', 'Luxury Estates']
    },
    {
      icon: <Factory size={40} />,
      title: 'Industrial Construction',
      description: 'Warehouses, manufacturing facilities, and industrial complexes with robust infrastructure.',
      features: ['Warehouses', 'Manufacturing Plants', 'Distribution Centers', 'Industrial Complexes']
    },
    {
      icon: <Wrench size={40} />,
      title: 'Infrastructure Development',
      description: 'Roads, bridges, utilities, and public infrastructure projects for community development.',
      features: ['Road Construction', 'Bridge Building', 'Utility Installation', 'Public Infrastructure']
    },
    {
      icon: <Hammer size={40} />,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with innovative renovation and remodeling solutions.',
      features: ['Interior Renovation', 'Exterior Upgrades', 'Historic Restoration', 'Space Optimization']
    },
    {
      icon: <Shield size={40} />,
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring timely and budget-friendly completion.',
      features: ['Design-Build', 'Construction Management', 'Quality Control', 'Safety Compliance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs with uncompromising quality and professional excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="text-blue-600 mb-6 group-hover:text-orange-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;