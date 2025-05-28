import { Button } from './ui/button';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover premium properties from our exclusive collection
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Medical Road, Aligarh"
                  className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
            
            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <select
                  className="w-full h-12 pl-10 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Price Range</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                <select
                  className="w-full h-12 pl-10 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="">All Prices</option>
                  <option value="0-2000000">Under ₹20 Lakhs</option>
                  <option value="2000000-5000000">₹20 - ₹50 Lakhs</option>
                  <option value="5000000-10000000">₹50 Lakhs - ₹1 Cr</option>
                  <option value="10000000+">Above ₹1 Cr</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block opacity-0">Search</label>
              <Button variant="gradient" size="lg" className="w-full h-12">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Properties', value: '500+' },
            { label: 'Happy Clients', value: '1,000+' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Cities Covered', value: '5+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center text-white transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 