import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const navigate = useNavigate();

  const handleReadMore = (title: string) => {
    navigate('/news');
  };

  const news = [
    {
      title: 'Al Imran Builders Wins Excellence Award for Sustainable Construction',
      excerpt: 'Our commitment to green building practices has been recognized with the prestigious Sustainable Construction Excellence Award...',
      date: 'December 15, 2023',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3860809/pexels-photo-3860809.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'New State-of-the-Art Manufacturing Facility Completed Ahead of Schedule',
      excerpt: 'We successfully delivered a 200,000 sq ft manufacturing facility two months ahead of schedule while maintaining our high-quality standards...',
      date: 'December 8, 2023',
      category: 'Project Update',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Expansion into Smart Building Technologies',
      excerpt: 'Al Imran Builders announces strategic partnership with leading technology companies to integrate smart building solutions...',
      date: 'November 28, 2023',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest projects, achievements, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
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
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group">
                  <span className="font-medium">Read More</span>
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
                <button 
                  onClick={() => handleReadMore(article.title)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <span className="font-medium">Read More</span>
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/news')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;