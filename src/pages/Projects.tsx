import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Healthcare'];

  const projects = [
    {
      title: 'Metropolitan Business Center',
      category: 'Commercial',
      location: 'Downtown District',
      year: '2023',
      value: '$45M',
      duration: '18 months',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A 25-story mixed-use development featuring office spaces, retail outlets, and premium amenities with LEED Gold certification.',
      features: ['LEED Gold Certified', '500,000 sq ft', 'Mixed-use development', 'Smart building technology']
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      location: 'Westside Heights',
      year: '2023',
      value: '$32M',
      duration: '14 months',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern residential complex with 200 units, featuring sustainable design and smart home technology integration.',
      features: ['200 residential units', 'Smart home technology', 'Sustainable design', 'Community amenities']
    },
    {
      title: 'Advanced Manufacturing Hub',
      category: 'Industrial',
      location: 'Industrial Park East',
      year: '2022',
      value: '$28M',
      duration: '12 months',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing facility with automated systems and eco-friendly infrastructure for automotive parts production.',
      features: ['Automated systems', 'Eco-friendly design', '300,000 sq ft', 'Advanced HVAC systems']
    },
    {
      title: 'City Bridge Renovation',
      category: 'Infrastructure',
      location: 'River District',
      year: '2022',
      value: '$15M',
      duration: '10 months',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete renovation of historic city bridge with modern safety features while preserving architectural heritage.',
      features: ['Historic preservation', 'Modern safety features', 'Seismic upgrades', 'LED lighting system']
    },
    {
      title: 'Tech Campus Expansion',
      category: 'Commercial',
      location: 'Innovation Quarter',
      year: '2023',
      value: '$52M',
      duration: '20 months',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expansion of technology campus with collaborative spaces, research facilities, and sustainable building practices.',
      features: ['Collaborative spaces', 'Research facilities', 'Solar panel integration', 'Green roof systems']
    },
    {
      title: 'Community Hospital Wing',
      category: 'Healthcare',
      location: 'Medical District',
      year: '2022',
      value: '$38M',
      duration: '16 months',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'New hospital wing with advanced medical facilities, patient-centered design, and state-of-the-art equipment.',
      features: ['Advanced medical facilities', 'Patient-centered design', '150 beds', 'Emergency department']
    },
    {
      title: 'Riverside Condominiums',
      category: 'Residential',
      location: 'Riverside District',
      year: '2023',
      value: '$25M',
      duration: '12 months',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury waterfront condominiums with panoramic river views and premium finishes throughout.',
      features: ['Waterfront location', 'Luxury finishes', '80 units', 'Private marina access']
    },
    {
      title: 'Distribution Center Complex',
      category: 'Industrial',
      location: 'Logistics Park',
      year: '2022',
      value: '$22M',
      duration: '8 months',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern distribution center with automated sorting systems and energy-efficient design for e-commerce operations.',
      features: ['Automated systems', 'Energy-efficient design', '400,000 sq ft', 'Loading dock facilities']
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our diverse portfolio of successful construction projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Filter size={20} className="text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin size={14} className="mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Value: {project.value}
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Duration: {project.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
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

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Statistics</h2>
            <p className="text-xl text-blue-100">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">$100Cr+</div>
              <div className="text-blue-100">Total Project Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
              <div className="text-blue-100">On-Time Completion</div>
            </div>
           
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful projects. Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => {
                // Simulate download
                alert('Portfolio download will begin shortly. Thank you for your interest!');
              }}
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;