import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Clock } from 'lucide-react';
import { Button } from './ui/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white font-semibold">RealReach</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We make real estate simple, efficient, and rewarding in Aligarh and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-white text-gray-400 hover:bg-gray-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white text-gray-400 hover:bg-gray-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white text-gray-400 hover:bg-gray-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white text-gray-400 hover:bg-gray-800 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {[
                'Properties',
                'About Us',
                'Our Services',
                'Contact Us',
                'Featured Listings',
                'Testimonials',
                'Career',
                'Blog'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 group">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 group-hover:text-primary transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Medical Road,<br />
                  Aligarh, Uttar Pradesh<br />
                  India - 202001
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <a href="tel:+919876543210" className="text-gray-400 group-hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <a href="mailto:contact@realreach.com" className="text-gray-400 group-hover:text-white transition-colors">
                  contact@realreach.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Clock className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest property updates and exclusive offers in Aligarh.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white placeholder-gray-500 transition-all duration-200"
              />
              <Button variant="gradient" className="w-full py-3 font-medium">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} RealReach. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-6 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
