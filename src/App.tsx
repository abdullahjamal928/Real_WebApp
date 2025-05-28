import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Sample property data for Aligarh
const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    title: "Modern Villa",
    price: "15000000",
    location: "Medical Road, Aligarh",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "Villa"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    title: "Luxury Apartment",
    price: "8500000",
    location: "University Road, Aligarh",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "Apartment"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    title: "Premium Plot",
    price: "25000000",
    location: "Civil Lines, Aligarh",
    beds: 5,
    baths: 4,
    sqft: 4000,
    type: "Plot"
  }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          
          {/* Featured Properties Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  Featured Properties in Aligarh
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover handpicked premium properties in the most sought-after locations of Aligarh
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProperties.map((property, index) => (
                  <PropertyCard key={index} {...property} />
                ))}
              </div>

              {/* View All Properties Button */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
                  View All Properties
                </button>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Why Choose RealReach?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We provide the best real estate experience in Aligarh
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Expert Local Agents",
                    description: "Our agents have deep knowledge of Aligarh's real estate market"
                  },
                  {
                    title: "Verified Listings",
                    description: "All our properties are personally verified for authenticity"
                  },
                  {
                    title: "Best Deals",
                    description: "We negotiate the best prices for our clients"
                  },
                  {
                    title: "24/7 Support",
                    description: "Our team is always here to help you"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
