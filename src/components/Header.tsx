
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              RealEstate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Buy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Rent</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Sell</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-3 py-2">Buy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-3 py-2">Rent</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-3 py-2">Sell</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-3 py-2">About</a>
              <div className="flex flex-col space-y-2 pt-3 px-3">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Sign In</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
