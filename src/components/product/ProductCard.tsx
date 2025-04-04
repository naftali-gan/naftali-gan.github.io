import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  scientificName?: string;
  height?: string;
  diameter?: string;
  details?: string;
  className?: string;
  showDetails?: boolean;
}

export default function ProductCard({
  imageSrc,
  name,
  scientificName,
  height,
  diameter,
  details,
  className = '',
  showDetails = false,
}: ProductCardProps) {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 ${className}`}>
      <div className="h-64 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className={`text-xl font-semibold ${className.includes('text-right') ? 'text-right' : 'text-center'}`}>{name}</h3>
        
        {showDetails && (
          <>
            {scientificName && <p className={`text-sm text-gray-500 mb-2 ${className.includes('text-right') ? 'text-right' : ''}`}>{scientificName}</p>}
            {height && <p className={`text-sm mb-3 ${className.includes('text-right') ? 'text-right' : ''}`}>{height}</p>}
            {diameter && <p className={`text-sm mb-3 ${className.includes('text-right') ? 'text-right' : ''}`}>{diameter}</p>}
            {details && <p className={`text-sm text-gray-600 mb-4 ${className.includes('text-right') ? 'text-right' : ''}`}>{details}</p>}
          </>
        )}
      </div>
    </div>
  );
} 