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
      name: 'Indoor Plants',
      description: 'Perfect plants for growing inside your home',
      products: [
        { id: 1, name: 'Philodendron', price: 79, image: '/images/product-1.jpg' },
        { id: 2, name: 'Orchid', price: 120, image: '/images/product-2.jpg' },
        { id: 3, name: 'Cactus', price: 45, image: '/images/product-3.jpg' },
      ]
    },
    {
      id: 2,
      name: 'Garden Plants',
      description: 'Plants that will turn your garden into a paradise',
      products: [
        { id: 4, name: 'Roses', price: 65, image: '/images/product-1.jpg' },
        { id: 5, name: 'Lavender', price: 50, image: '/images/product-2.jpg' },
        { id: 6, name: 'Jasmine', price: 85, image: '/images/product-3.jpg' },
      ]
    },
    {
      id: 3,
      name: 'Gardening Supplies',
      description: 'Everything you need to nurture your garden',
      products: [
        { id: 7, name: 'Gardening Tools', price: 120, image: '/images/product-1.jpg' },
        { id: 8, name: 'Planters', price: 90, image: '/images/product-2.jpg' },
        { id: 9, name: 'Irrigation Systems', price: 250, image: '/images/product-3.jpg' },
      ]
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          We offer a wide variety of quality plants, trees, shrubs, flowers, and gardening accessories. All our products are carefully selected to ensure customer satisfaction.
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