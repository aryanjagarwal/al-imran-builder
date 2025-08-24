import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Excellence,
            <span className="block text-orange-400">Creating Futures</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            From commercial complexes to residential developments, we deliver world-class construction solutions with unmatched quality and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Our Projects
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Award size={40} className="mx-auto mb-4 text-orange-400" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Users size={40} className="mx-auto mb-4 text-orange-400" />
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-gray-200">Expert Team Members</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Calendar size={40} className="mx-auto mb-4 text-orange-400" />
              <div className="text-3xl font-bold mb-2">28+</div>
              <div className="text-gray-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;