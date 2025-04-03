import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products | Naftali\'s Nursery',
  description: 'Discover our wide range of quality plants and gardening products at Naftali\'s Nursery',
};

export default function ProductsPage() {
  // Mock product data - in a real app, this would come from a database or API
  const categories = [
    {
      id: 1,
      name: 'Palms and Plants',
      description: 'Quality palms and plants for garden and home decoration',
      products: [
        { 
          id: 1, 
          name: 'King Palm', 
          price: 350, 
          image: '/images/product-1.jpg',
          scientificName: 'Archontophoenix cunninghamiana',
          height: '15-20 m',
          diameter: '20-50 cm',
          details: 'A tall and impressive palm native to Australia. It reaches a height of 12 meters or more. It has a medium to fast growth rate and requires a moderate amount of watering.'
        },
        { 
          id: 2, 
          name: 'Foxtail Palm', 
          price: 300, 
          image: '/images/product-2.jpg',
          scientificName: 'Wodyetia bifurcate',
          height: '6-10 m',
          details: 'A tall, impressive, and beautiful palm with a tropical appearance. Native to Australia. Medium to large size, reaching about 10 meters in height. Medium to fast growth rate and requires moderate watering.'
        },
        { 
          id: 3, 
          name: 'Royal Palm', 
          price: 400, 
          image: '/images/product-3.jpg',
          scientificName: 'Roystonea',
          height: '15-20 m',
          diameter: '40-70 cm',
          details: 'The Royal Palm, native to Central and South America, is a beautiful and commanding palm. Medium to large in size, it can reach 20 meters or more in height. It has a medium growth rate and requires moderate watering.'
        },
        { 
          id: 4, 
          name: 'Cycas Thouarsii', 
          price: 250, 
          image: '/images/product-1.jpg',
          scientificName: 'Cycas thouarsii',
          height: '1-2 m',
          details: 'An evergreen cycad native to Madagascar. Small to medium size, reaches about 2 meters in height with leaves spreading 1.5-2 meters wide. Medium growth rate and requires moderate watering.'
        },
        { 
          id: 5, 
          name: 'Pygmy Date Palm', 
          price: 200, 
          image: '/images/product-2.jpg',
          scientificName: 'Phoenix roebelenii',
          height: '2-3 m',
          details: 'A small palm that is very easy to grow and maintain. Reaches a height of about 2-3 meters with leaves spreading about 2 meters wide. Medium growth rate and requires moderate watering.'
        },
        { 
          id: 6, 
          name: 'Sago Palm', 
          price: 280, 
          image: '/images/product-3.jpg',
          scientificName: 'Cycas revoluta',
          height: '1.5-2 m',
          details: 'An evergreen cycad native to Japan. Characterized by a fairly symmetrical appearance and shiny green leaves. Reaches a height of about 2 meters with leaves spreading about 1.5 meters wide. Slow growth rate and requires low to moderate watering.'
        },
      ]
    },
    {
      id: 2,
      name: 'Additional Palms',
      description: 'Unique palms to design your garden',
      products: [
        { 
          id: 7, 
          name: 'Triangle Palm', 
          price: 320, 
          image: '/images/product-1.jpg',
          scientificName: 'Dypsis decaryi',
          height: '5-6 m',
          details: 'A palm native to southern Madagascar. Medium size, about 5-6 meters tall and its leaves can reach a length of about 3 meters. Medium to fast growth rate and requires moderate watering.'
        },
        { 
          id: 8, 
          name: 'Queen Palm', 
          price: 350, 
          image: '/images/product-2.jpg',
          scientificName: 'Syagrus romanzoffiana',
          height: '15-20 m',
          diameter: '20-50 cm',
          details: 'A palm with a tropical appearance native to the forests of South America. Medium to large in size, its height typically reaches about 15 meters and the trunk width varies between 20 and 50 cm. The Queen Palm is a durable tree with a fast growth rate and requires moderate watering.'
        },
      ]
    },
    {
      id: 3,
      name: 'Fruit Trees',
      description: 'Quality fruit trees for garden and yard',
      products: [
        { 
          id: 9, 
          name: 'European Olive', 
          price: 180, 
          image: '/images/product-3.jpg',
          scientificName: 'Olea europaea',
          height: '3-9 m',
          details: 'An evergreen tree native to the Middle East, despite its name. The tree is amazingly beautiful and suitable for almost any garden and landscape. Its height varies between 3 and 9 meters, depending on age and variety. Slow growth rate and requires low to moderate watering.'
        },
        { 
          id: 10, 
          name: 'Lemon Tree', 
          price: 150, 
          image: '/images/product-1.jpg',
          scientificName: 'Citrus × limon',
          height: '1.5-2.5 m',
          details: 'An evergreen tree native to Asia. Height of about 2 meters. Medium growth rate and requires moderate watering. The lemon tree blooms and bears fruit almost year-round.'
        },
        { 
          id: 11, 
          name: 'Clementine Tree', 
          price: 160, 
          image: '/images/product-2.jpg',
          scientificName: 'Citrus × clementina',
          height: '3-4 m',
          details: 'The Clementine is a hybrid between a mandarin variety and a bitter orange. The tree can reach 4 meters or more in height. Medium growth rate and requires moderate to high watering.'
        },
        { 
          id: 12, 
          name: 'Washington Navel Orange', 
          price: 170, 
          image: '/images/product-3.jpg',
          scientificName: 'Citrus sinensis',
          height: '2-3 m',
          details: 'Washington Navel Orange, also known as the navel orange, is a natural mutation of orange that developed in Brazil. The tree is about 3 meters or more in height. Medium growth rate and requires moderate to high watering.'
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
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.scientificName}</p>
                    <p className="text-sm mb-3">Height: {product.height}</p>
                    {product.diameter && <p className="text-sm mb-3">Trunk diameter: {product.diameter}</p>}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.details}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">₪{product.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded">
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Looking for something special?</h2>
          <p className="mb-6">If you don't find what you're looking for, please contact us and we'll be happy to help.</p>
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-md text-lg font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
} 