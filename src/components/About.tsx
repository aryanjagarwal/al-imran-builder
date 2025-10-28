import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring superior craftsmanship and lasting results.'
    },
    {
      icon: <Users size={40} />,
      title: 'Client Partnership',
      description: 'Building strong relationships through transparent communication and collaborative project delivery.'
    },
    {
      icon: <Award size={40} />,
      title: 'Safety First',
      description: 'Prioritizing workplace safety and environmental responsibility in all our construction activities.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and sustainable practices for modern construction solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Al Imran Builders & Contractors
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 28 years of excellence in the construction industry, Al Imran Builders & Contractors has established itself as a trusted leader in delivering exceptional construction projects across commercial, residential, and industrial sectors.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to quality, innovation, and client satisfaction has earned us a reputation for excellence. We combine traditional craftsmanship with modern technology to deliver projects that exceed expectations while maintaining the highest safety standards.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">28+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold mb-1">ISO 9001</div>
              <div className="text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;