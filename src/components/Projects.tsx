import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Metropolitan Business Center',
      category: 'Commercial',
      location: 'Downtown District',
      year: '2023',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A 25-story mixed-use development featuring office spaces, retail outlets, and premium amenities.'
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      location: 'Westside Heights',
      year: '2023',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern residential complex with 200 units, featuring sustainable design and smart home technology.'
    },
    {
      title: 'Industrial Manufacturing Hub',
      category: 'Industrial',
      location: 'Industrial Park East',
      year: '2022',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing facility with automated systems and eco-friendly infrastructure.'
    },
    {
      title: 'City Bridge Renovation',
      category: 'Infrastructure',
      location: 'River District',
      year: '2022',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete renovation of historic city bridge with modern safety features and architectural preservation.'
    },
    {
      title: 'Tech Campus Expansion',
      category: 'Commercial',
      location: 'Innovation Quarter',
      year: '2023',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expansion of technology campus with collaborative spaces and sustainable building practices.'
    },
    {
      title: 'Community Hospital Wing',
      category: 'Healthcare',
      location: 'Medical District',
      year: '2022',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'New hospital wing with advanced medical facilities and patient-centered design.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects that demonstrate our commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">{project.category}</span>
                  <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;