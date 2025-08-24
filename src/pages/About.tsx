import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Target, Users, Lightbulb, Calendar, MapPin, Trophy, Shield } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring superior craftsmanship and lasting results that exceed client expectations.'
    },
    {
      icon: <Users size={40} />,
      title: 'Client Partnership',
      description: 'Building strong relationships through transparent communication, collaborative project delivery, and unwavering commitment to client satisfaction.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Safety First',
      description: 'Prioritizing workplace safety and environmental responsibility in all our construction activities with zero-compromise policies.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and sustainable practices for modern construction solutions that shape the future.'
    }
  ];

  const timeline = [
    {
      year: '1995',
      title: 'Company Founded',
      description: 'Al Imran Builders & Contractors was established with a vision to deliver exceptional construction services.'
    },
    {
      year: '2000',
      title: 'First Major Project',
      description: 'Completed our first major commercial development, establishing our reputation for quality and reliability.'
    },
    {
      year: '2005',
      title: 'Expansion Phase',
      description: 'Expanded operations to include industrial construction and infrastructure development services.'
    },
    {
      year: '2010',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.'
    },
    {
      year: '2015',
      title: 'Sustainable Focus',
      description: 'Launched green building initiatives and became a leader in sustainable construction practices.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Integrated advanced technology solutions including BIM, IoT, and smart building systems.'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a top construction company with over 500 completed projects and numerous industry awards.'
    }
  ];

  const leadership = [
    {
      name: 'Al Imran Ahmed',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 30 years of construction industry experience, Al Imran leads the company with vision and expertise.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sarah oversees daily operations and ensures project delivery excellence across all divisions.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Michael drives innovation and technology integration in our construction processes and solutions.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Safety & Quality',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Emily ensures the highest safety standards and quality control across all our construction projects.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Occupational Health & Safety',
    'LEED Accredited Professional',
    'Green Building Council Member',
    'Construction Industry Institute'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Al Imran Builders & Contractors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building excellence and creating futures with over 28 years of construction expertise and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1995, Al Imran Builders & Contractors has grown from a small local construction company to a leading force in the industry. Our journey began with a simple mission: to deliver exceptional construction projects that stand the test of time.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have built a reputation for excellence through our commitment to quality craftsmanship, innovative solutions, and client satisfaction. Today, we are proud to have completed over 500 projects across commercial, residential, and industrial sectors.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our success is built on the foundation of strong relationships with our clients, partners, and the communities we serve. We continue to evolve and adapt to meet the changing needs of the construction industry while maintaining our core values of integrity, quality, and innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">28+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Industry Awards</div>
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our company and defined our path to excellence.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our company with vision, expertise, and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{leader.position}</div>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry-leading certifications and professional memberships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                <Trophy size={40} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us for your next construction project and experience the difference that 28 years of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;