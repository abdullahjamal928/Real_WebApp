import { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif text-primary font-semibold">RealReach</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#properties" className="text-gray-700 hover:text-primary transition-colors">Properties</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <Button variant="gradient" size="default">
              List Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#properties" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Properties</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
            <div className="px-3 py-2">
              <Button variant="gradient" size="default" className="w-full">
                List Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 