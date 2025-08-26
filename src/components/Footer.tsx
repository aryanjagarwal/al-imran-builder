import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialClick = (platform: string) => {
    alert(`Redirecting to ${platform} page...`);
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Al Imran Builders & Developers
            </h3>
            <p className="text-gray-300 mb-6">
              Building excellence and creating futures with over 28 years of
              construction expertise and unwavering commitment to quality.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick("Facebook")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={() => handleSocialClick("Twitter")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => handleSocialClick("LinkedIn")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() => handleSocialClick("Instagram")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Commercial Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Residential Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Industrial Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Infrastructure Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Renovation & Remodeling
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="hover:text-white transition-colors"
                >
                  Project Management
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleLinkClick("/about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/projects")}
                  className="hover:text-white transition-colors"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/careers")}
                  className="hover:text-white transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/news")}
                  className="hover:text-white transition-colors"
                >
                  News & Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Safety information page coming soon!")}
                  className="hover:text-white transition-colors"
                >
                  Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Quality assurance page coming soon!")}
                  className="hover:text-white transition-colors"
                >
                  Quality Assurance
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>
                  123 Construction Avenue
                  <br />
                  Business District, Metro City
                  <br />
                  MC 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3" />
                <span>info@alimranbuilders.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Al Imran Builders & Contractors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button
                onClick={() => alert("Privacy Policy page coming soon!")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => alert("Terms of Service page coming soon!")}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => alert("Cookie Policy page coming soon!")}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
