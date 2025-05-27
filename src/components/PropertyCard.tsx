
import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: "For Sale" | "For Rent" | "Sold";
}

const PropertyCard = ({ id, image, price, address, beds, baths, sqft, type, status }: PropertyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`Property at ${address}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium ${
            status === "For Sale" ? "bg-blue-600 hover:bg-blue-700 text-white" : 
            status === "For Rent" ? "bg-gray-600 hover:bg-gray-700 text-white" : "bg-gray-400 text-white"
          }`}
        >
          {status}
        </Badge>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white hover:bg-gray-50"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{price}</h3>
          <p className="text-gray-600 flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            {address}
          </p>
        </div>
        
        <div className="flex items-center justify-between text-gray-600 mb-4 py-3 px-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{sqft.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="border-gray-300 text-gray-700">{type}</Badge>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
