
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">RealEstate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Buy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Rent</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sell</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Buy</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Rent</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sell</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Sign In</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
