import Link from 'next/link';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  title: string;
  ctaText: string;
  ctaLink: string;
  products: Array<{
    id: string;
    image: string;
    name: string;
  }>;
  isRTL?: boolean;
}

export default function FeaturedProducts({
  title,
  ctaText,
  ctaLink,
  products,
  isRTL = false,
}: FeaturedProductsProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.image}
              name={product.name}
              className={isRTL ? "text-right" : ""}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            href={ctaLink}
            className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
} 