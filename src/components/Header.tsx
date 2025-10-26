import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 95812 19373</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@alimranbuildersanddevelopers.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Excellence in Construction Since 1995</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              Al Imran Builders & Developers
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/careers"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/careers")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Careers
              </Link>
              <Link
                to="/news"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/news")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                News
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/services")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/projects")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/careers"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/careers")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/news"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/news")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
