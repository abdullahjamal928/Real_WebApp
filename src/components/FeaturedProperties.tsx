
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      price: "$750,000",
      address: "123 Oak Street, Beverly Hills, CA",
      beds: 3,
      baths: 2,
      sqft: 2100,
      type: "House",
      status: "For Sale" as const,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      price: "$3,200/month",
      address: "456 Pine Avenue, Manhattan, NY",
      beds: 2,
      baths: 1,
      sqft: 1200,
      type: "Apartment",
      status: "For Rent" as const,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      price: "$1,200,000",
      address: "789 Maple Drive, Austin, TX",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "Townhouse",
      status: "For Sale" as const,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      price: "$425,000",
      address: "321 Elm Street, Portland, OR",
      beds: 2,
      baths: 2,
      sqft: 1450,
      type: "Condo",
      status: "For Sale" as const,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      price: "$2,800/month",
      address: "654 Cedar Lane, Seattle, WA",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "House",
      status: "For Rent" as const,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      price: "$950,000",
      address: "987 Birch Road, San Francisco, CA",
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "Condo",
      status: "For Sale" as const,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium properties in prime locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
