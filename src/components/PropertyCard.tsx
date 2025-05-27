
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
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg bg-white">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`Property at ${address}`}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge 
          className={`absolute top-4 left-4 px-3 py-1 font-semibold ${
            status === "For Sale" ? "bg-emerald-600 hover:bg-emerald-700" : 
            status === "For Rent" ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-600 hover:bg-gray-700"
          } shadow-lg`}
        >
          {status}
        </Badge>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-7">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-emerald-600 mb-2">{price}</h3>
          <p className="text-gray-600 flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {address}
          </p>
        </div>
        
        <div className="flex items-center justify-between text-gray-600 mb-6 bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="font-medium">{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="font-medium">{baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="font-medium">{sqft.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">{type}</Badge>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg px-6">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
