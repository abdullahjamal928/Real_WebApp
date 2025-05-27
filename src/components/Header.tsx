
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
              <Home className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              RealEstate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Buy</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Rent</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Sell</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">About</a>
            <Button variant="outline" className="mr-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50">Sign In</Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg">Get Started</Button>
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
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Buy</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Rent</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">Sell</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50">About</a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">Sign In</Button>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
