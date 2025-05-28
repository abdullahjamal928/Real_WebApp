import { Heart, MapPin, Bed, Bath, Square, Tag } from 'lucide-react';
import { Button } from './ui/Button';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
}

const PropertyCard = ({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  type
}: PropertyCardProps) => {
  // Convert price to Indian format
  const formatIndianPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (numericPrice >= 10000000) {
      return `₹${(numericPrice / 10000000).toFixed(2)} Cr`;
    } else if (numericPrice >= 100000) {
      return `₹${(numericPrice / 100000).toFixed(2)} Lakhs`;
    } else {
      return `₹${numericPrice.toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white text-gray-600 hover:text-red-500 rounded-full shadow-lg backdrop-blur-sm"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {title}
            </h3>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                {formatIndianPrice(price)}
              </div>
              <div className="text-sm text-gray-500">
                {parseInt(price.replace(/[^0-9]/g, '')) > 0 ? 'For Sale' : 'Price on Request'}
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-500 space-x-1">
            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm truncate">{location}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Bed className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{beds} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{baths} Baths</span>
          </div>
          <div className="flex items-center space-x-2">
            <Square className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{sqft} sq.ft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Button variant="outline" className="w-[48%]">
            Contact Agent
          </Button>
          <Button variant="gradient" className="w-[48%]">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
