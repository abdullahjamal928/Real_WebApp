
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Home
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover exceptional properties with our modern search experience
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 text-gray-900 border-gray-200"
              />
            </div>
            
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-12 text-gray-900 border-gray-200">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-12 text-gray-900 border-gray-200">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-200k">$0 - $200k</SelectItem>
                <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m+">$1M+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
