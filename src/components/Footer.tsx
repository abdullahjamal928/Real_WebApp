
import { Home, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold">RealEstate</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect home. We make real estate simple and accessible.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rent Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sell Your Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mortgage Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Real Estate Agent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Advice</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@realestate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RealEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
