import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, Tag, Bed, Bath, Square, IndianRupee } from 'lucide-react';

const NewsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  const handleViewDetails = (title: string) => {
    alert(`Opening property details: "${title}"`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! We'll send you property updates at: ${email}`);
      setEmail('');
    }
  };

  const categories = ['All', 'Residential', 'Commercial', 'Luxury Villas', 'Apartments', 'Industrial'];

  const properties = [
    {
      title: 'Luxury Penthouse in Jubilee Hills',
      excerpt: 'Stunning 4BHK penthouse with panoramic city views, premium finishes, and world-class amenities in the heart of Hyderabad.',
      location: 'Jubilee Hills, Hyderabad',
      price: '5.2 Cr',
      bedrooms: 4,
      bathrooms: 5,
      area: 4200,
      category: 'Luxury Villas',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      status: 'Ready to Move'
    },
    {
      title: 'Modern 3BHK Apartment',
      excerpt: 'Spacious 3BHK apartment with contemporary design, modular kitchen, and excellent connectivity to IT hubs.',
      location: 'Gachibowli, Hyderabad',
      price: '1.8 Cr',
      bedrooms: 3,
      bathrooms: 3,
      area: 2100,
      category: 'Apartments',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Under Construction'
    },
    {
      title: 'Premium Commercial Space',
      excerpt: 'Grade-A commercial office space with modern infrastructure, ample parking, and strategic location in business district.',
      location: 'Financial District, Hyderabad',
      price: '3.5 Cr',
      bedrooms: 0,
      bathrooms: 6,
      area: 5000,
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Ready to Move'
    },
    {
      title: 'Spacious 2BHK with Garden',
      excerpt: 'Beautiful ground floor 2BHK apartment with private garden, perfect for families seeking peaceful living.',
      location: 'Kondapur, Hyderabad',
      price: '95 Lakhs',
      bedrooms: 2,
      bathrooms: 2,
      area: 1450,
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Ready to Move'
    },
    {
      title: 'Independent Villa with Pool',
      excerpt: 'Luxurious 5BHK independent villa featuring private swimming pool, landscaped garden, and premium amenities.',
      location: 'Kokapet, Hyderabad',
      price: '6.8 Cr',
      bedrooms: 5,
      bathrooms: 6,
      area: 5500,
      category: 'Luxury Villas',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Under Construction'
    },
    {
      title: 'Compact Studio Apartment',
      excerpt: 'Perfect for young professionals, this studio apartment offers modern amenities and excellent location near metro.',
      location: 'Hitec City, Hyderabad',
      price: '45 Lakhs',
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      category: 'Apartments',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Ready to Move'
    },
    {
      title: 'Industrial Warehouse',
      excerpt: 'Large industrial warehouse with excellent connectivity, loading facilities, and 24/7 security.',
      location: 'Patancheru, Hyderabad',
      price: '2.2 Cr',
      bedrooms: 0,
      bathrooms: 4,
      area: 15000,
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Ready to Move'
    },
    {
      title: 'Luxury 4BHK Duplex',
      excerpt: 'Elegant duplex with designer interiors, rooftop terrace, and smart home automation in gated community.',
      location: 'Banjara Hills, Hyderabad',
      price: '4.5 Cr',
      bedrooms: 4,
      bathrooms: 5,
      area: 3800,
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      status: 'Under Construction'
    }
  ];

  const filteredProperties = selectedCategory === 'All' 
    ? properties 
    : properties.filter(property => property.category === selectedCategory);

  const featuredProperty = properties.find(property => property.featured);
  const regularProperties = filteredProperties.filter(property => !property.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Properties</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover your dream property from our exclusive collection of residential, commercial, and luxury real estate in Hyderabad.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Tag size={20} className="text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Filter by Type:</span>
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

      {/* Featured Property */}
      {featuredProperty && selectedCategory === 'All' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-none relative">
                  <img 
                    src={featuredProperty.image}
                    alt={featuredProperty.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                      {featuredProperty.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {featuredProperty.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredProperty.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredProperty.excerpt}
                  </p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin size={20} className="mr-2 text-blue-600" />
                    <span>{featuredProperty.location}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {featuredProperty.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed size={20} className="text-gray-600 mr-2" />
                        <span className="text-gray-700">{featuredProperty.bedrooms} BHK</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath size={20} className="text-gray-600 mr-2" />
                      <span className="text-gray-700">{featuredProperty.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={20} className="text-gray-600 mr-2" />
                      <span className="text-gray-700">{featuredProperty.area} sqft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-2xl font-bold text-blue-600">
                      <IndianRupee size={24} className="mr-1" />
                      <span>{featuredProperty.price}</span>
                    </div>
                    <button 
                      onClick={() => handleViewDetails(featuredProperty.title)}
                      className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProperties.map((property, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">
                      {property.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {property.category}
                    </span>
                    <div className="flex items-center text-blue-600 font-bold">
                      <IndianRupee size={16} className="mr-0.5" />
                      {property.price}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {property.location}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {property.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1" />
                        {property.bedrooms} BHK
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      {property.area} sqft
                    </div>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(property.title)}
                    className="w-full flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 py-2 rounded-lg transition-colors group font-medium"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Property Alerts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new properties, exclusive deals, and market insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button 
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;