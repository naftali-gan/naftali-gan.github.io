import ProductCard from "@/components/product/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Plants | Naftali\'s Nursery',
  description: 'Explore our selection of quality plants, trees, palms, and fruit trees.',
};

// Define product type to fix the type error
interface Product {
  id: number;
  name: string;
  image: string;
  scientificName: string;
  height: string;
  diameter?: string; // Make diameter optional
  details: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

export default function ProductsPage() {
  // Mock product data - in a real app, this would come from a database or API
  const categories: Category[] = [
    {
      id: 1,
      name: "Palm Trees",
      description: "Majestic palm trees that add a tropical feel to any space.",
      products: [
        { 
          id: 1, 
          name: "Areca Palm", 
          image: "/images/products/areca.webp",
          scientificName: "Dypsis lutescens",
          height: "4-8m",
          diameter: "20-30cm",
          details: "The Areca Palm, also known as Butterfly Palm, is a popular indoor and outdoor palm with feathery, arching fronds. It forms multiple trunks and creates a dense, tropical appearance."
        },
        { 
          id: 2, 
          name: "King Palm", 
          image: "/images/products/cunninghamiana.webp",
          scientificName: "Archontophoenix cunninghamiana",
          height: "5-10m",
          diameter: "30-40cm",
          details: "The King Palm is an elegant, single-trunk palm with a smooth, light gray trunk. It has a graceful, feathery crown of dark green fronds."
        },
        { 
          id: 3, 
          name: "Foxtail Palm", 
          image: "/images/products/bifurcate.webp",
          scientificName: "Wodyetia bifurcata",
          height: "6-10m",
          diameter: "25-35cm",
          details: "The Foxtail Palm is known for its unique, fluffy fronds that resemble a fox's tail. It has a smooth, light gray trunk and is relatively fast-growing."
        },
        { 
          id: 4, 
          name: "Royal Palm", 
          image: "/images/products/roystonea.webp",
          scientificName: "Roystonea regia",
          height: "15-20m",
          diameter: "40-50cm",
          details: "The Royal Palm is a tall, majestic palm with a smooth, light gray trunk that has a distinctive bulge. It has elegant, feathery fronds and is commonly used in avenue plantings."
        },
        { 
          id: 5, 
          name: "Robelini Palm", 
          image: "/images/products/roebelenii.webp",
          scientificName: "Phoenix roebelenii",
          height: "2-3m",
          diameter: "15-20cm",
          details: "The Robelini Palm is a small, elegant palm with a slender trunk and delicate, arching fronds. It's perfect for smaller spaces and container planting."
        },
        { 
          id: 6, 
          name: "Triangle Palm", 
          image: "/images/products/decaryi.webp",
          scientificName: "Dypsis decaryi",
          height: "6-10m",
          diameter: "25-35cm",
          details: "The Triangle Palm is named for its distinctive three-sided arrangement of fronds. It has a unique, sculptural appearance that makes it a standout specimen."
        },
        { 
          id: 7, 
          name: "Queen Palm", 
          image: "/images/products/romanzoffiana.webp",
          scientificName: "Syagrus romanzoffiana",
          height: "10-15m",
          diameter: "30-40cm",
          details: "The Queen Palm is a popular, fast-growing palm with a smooth, gray trunk and long, feathery fronds. It's widely used in landscaping for its elegant appearance."
        }
      ]
    },
    {
      id: 2,
      name: "Ornamental Trees",
      description: "Beautiful ornamental trees to enhance your garden's aesthetics.",
      products: [
        { 
          id: 8, 
          name: "Cycas Thouarsii", 
          image: "/images/products/thouarsii.webp",
          scientificName: "Cycas thouarsii",
          height: "2-5m",
          diameter: "20-30cm",
          details: "Cycas Thouarsii is a slow-growing cycad with a thick, scaly trunk and a crown of stiff, feathery fronds. It's an ancient plant with a prehistoric appearance."
        },
        { 
          id: 9, 
          name: "Cycas Revoluta", 
          image: "/images/products/revoluta.webp",
          scientificName: "Cycas revoluta",
          height: "2-3m",
          diameter: "20-30cm",
          details: "Cycas Revoluta, commonly known as Sago Palm, is not a true palm but a cycad. It has a thick, shaggy trunk and stiff, dark green fronds."
        },
        { 
          id: 10, 
          name: "European Olive", 
          image: "/images/products/europaea.webp",
          scientificName: "Olea europaea",
          height: "8-15m",
          diameter: "30-60cm",
          details: "The European Olive is a long-lived, slow-growing tree with a gnarled, twisted trunk and silvery-green leaves. It produces edible olives and is valued for its ornamental appearance."
        }
      ]
    },
    {
      id: 3,
      name: "Fruit Trees",
      description: "Productive fruit trees that add beauty and bounty to your garden.",
      products: [
        { 
          id: 11, 
          name: "Lemon Tree", 
          image: "/images/products/limon.webp",
          scientificName: "Citrus limon",
          height: "3-6m",
          details: "The Lemon Tree is a small evergreen tree that produces fragrant white flowers and yellow fruits. It's perfect for pots or gardens and provides year-round interest."
        },
        { 
          id: 12, 
          name: "Clementine Tree", 
          image: "/images/products/clementina.webp",
          scientificName: "Citrus clementina",
          height: "2-4m",
          details: "The Clementine Tree is a small, thornless citrus tree that produces sweet, easy-to-peel fruits. It has glossy, dark green leaves and fragrant white flowers."
        },
        { 
          id: 13, 
          name: "Washington Orange", 
          image: "/images/products/sinensis.webp",
          scientificName: "Citrus sinensis",
          height: "3-5m",
          details: "The Washington Orange, also known as the navel orange, is a sweet, seedless orange variety. The tree has a rounded crown of glossy, dark green leaves."
        },
      ]
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Plants</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          We offer a wide variety of quality plants, trees, palms, and fruit trees. All our products are carefully selected to ensure customer satisfaction.
        </p>
        
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.image}
                  name={product.name}
                  scientificName={product.scientificName}
                  height={`Height: ${product.height}`}
                  diameter={product.diameter ? `Trunk diameter: ${product.diameter}` : undefined}
                  details={product.details}
                  showDetails={true}
                />
              ))}
            </div>
          </section>
        ))}
        
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Looking for something special?</h2>
          <p className="mb-6">If you don&apos;t find what you&apos;re looking for, please contact us and we&apos;ll be happy to help.</p>
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-md text-lg font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
} 