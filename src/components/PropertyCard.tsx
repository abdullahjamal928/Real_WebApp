
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={`Property at ${address}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          className={`absolute top-3 left-3 ${
            status === "For Sale" ? "bg-green-600" : 
            status === "For Rent" ? "bg-blue-600" : "bg-gray-600"
          }`}
        >
          {status}
        </Badge>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-blue-600 mb-1">{price}</h3>
          <p className="text-gray-600 flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {address}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Badge variant="outline">{type}</Badge>
          <Button className="bg-blue-600 hover:bg-blue-700">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
