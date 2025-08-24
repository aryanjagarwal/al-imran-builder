import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Tag, User } from 'lucide-react';

const NewsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  const handleReadMore = (title: string) => {
    alert(`Opening full article: "${title}"`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  const categories = ['All', 'Company News', 'Project Updates', 'Awards', 'Industry Insights', 'Safety'];

  const newsArticles = [
    {
      title: 'Al Imran Builders Wins Excellence Award for Sustainable Construction',
      excerpt: 'Our commitment to green building practices has been recognized with the prestigious Sustainable Construction Excellence Award for our innovative approach to eco-friendly construction methods.',
      content: 'Al Imran Builders & Contractors has been honored with the Sustainable Construction Excellence Award at the annual Construction Industry Awards ceremony. This recognition highlights our dedication to implementing environmentally responsible building practices across all our projects.',
      date: 'December 15, 2023',
      author: 'Sarah Johnson',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3860809/pexels-photo-3860809.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'New State-of-the-Art Manufacturing Facility Completed Ahead of Schedule',
      excerpt: 'We successfully delivered a 200,000 sq ft manufacturing facility two months ahead of schedule while maintaining our high-quality standards and staying within budget.',
      content: 'The new manufacturing facility for TechCorp Industries represents a milestone in modern industrial construction. Featuring automated systems, energy-efficient design, and advanced safety protocols, this project showcases our expertise in complex industrial builds.',
      date: 'December 8, 2023',
      author: 'Michael Chen',
      category: 'Project Updates',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Expansion into Smart Building Technologies',
      excerpt: 'Al Imran Builders announces strategic partnership with leading technology companies to integrate smart building solutions into our construction projects.',
      content: 'We are excited to announce our partnership with leading IoT and smart building technology providers. This collaboration will enable us to offer cutting-edge smart building solutions, including automated climate control, security systems, and energy management.',
      date: 'November 28, 2023',
      author: 'Emily Rodriguez',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Zero Incident Safety Record Achieved Across All Sites',
      excerpt: 'We are proud to announce that all our construction sites have maintained a zero incident safety record for the past 12 months, demonstrating our commitment to worker safety.',
      content: 'Safety remains our top priority at Al Imran Builders. Through comprehensive training programs, regular safety audits, and strict adherence to safety protocols, we have achieved an outstanding safety record across all active construction sites.',
      date: 'November 20, 2023',
      author: 'David Wilson',
      category: 'Safety',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Construction Industry Trends: The Future of Building',
      excerpt: 'Our CEO shares insights on emerging trends in the construction industry, including sustainable materials, digital transformation, and workforce development.',
      content: 'The construction industry is experiencing rapid transformation driven by technological advancement and environmental consciousness. In this comprehensive analysis, we explore the key trends shaping the future of construction.',
      date: 'November 15, 2023',
      author: 'Al Imran Ahmed',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Community Hospital Project Receives Healthcare Design Award',
      excerpt: 'Our recently completed community hospital wing has been recognized for excellence in healthcare facility design and patient-centered construction.',
      content: 'The new community hospital wing project has received the Healthcare Design Excellence Award for its innovative approach to patient care environments and sustainable healthcare construction practices.',
      date: 'November 10, 2023',
      author: 'Lisa Thompson',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Residential Complex Project Breaks Ground',
      excerpt: 'Construction begins on our largest residential development project, featuring 300 luxury units with sustainable design and modern amenities.',
      content: 'We are excited to begin construction on the Riverside Luxury Residences, a 300-unit residential complex that will set new standards for sustainable living and modern design in the metropolitan area.',
      date: 'November 5, 2023',
      author: 'Robert Martinez',
      category: 'Project Updates',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Investment in Advanced Construction Equipment',
      excerpt: 'Al Imran Builders invests $5M in state-of-the-art construction equipment to enhance project efficiency and safety across all operations.',
      content: 'Our continued investment in cutting-edge construction equipment demonstrates our commitment to delivering projects more efficiently while maintaining the highest safety standards for our workforce.',
      date: 'October 28, 2023',
      author: 'James Anderson',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest news, project updates, and industry insights from Al Imran Builders & Contractors.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Tag size={20} className="text-gray-600 mr-2" />
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

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'All' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full mr-3">
                      Featured
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={16} className="mr-2" />
                      <span className="mr-4">{featuredArticle.author}</span>
                      <Calendar size={16} className="mr-2" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <button 
                      onClick={() => handleReadMore(featuredArticle.title)}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={14} className="mr-1" />
                      {article.author}
                    </div>
                    <button 
                      onClick={() => handleReadMore(article.title)}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, project updates, and industry insights directly in your inbox.
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