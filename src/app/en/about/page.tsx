import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Naftali Gan',
  description: 'Learn about our story and vision at Naftali Gan, a leading nursery in Israel',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Naftali Gan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero-background.jpg"
              alt="Naftali Gan"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Naftali Gan was founded in 2000 out of a deep love for nature and gardening. What began as a small family business has grown over the years into a leading nursery providing quality plants and gardening products to homes, businesses, and local authorities throughout Israel.
            </p>
            <p className="mb-4">
              Our goal is not only to provide beautiful plants but also to share our knowledge and experience with our customers to help them create and maintain beautiful and healthy gardens.
            </p>
            <p>
              We believe that every garden, large or small, can become a stunning haven that provides pleasure, tranquility, and satisfaction to its owners.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Quality</h3>
              <p>We are meticulous about selecting the best plants and offer only high-quality products that we believe in.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Sustainability</h3>
              <p>We are committed to environmentally friendly gardening methods and promoting sustainable gardening practices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Service</h3>
              <p>We believe in excellent customer service and providing professional and friendly advice to every customer.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Our team consists of experienced gardening experts with a genuine passion for plants and gardening. We are here to help you create the perfect garden for you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
            {[
              { name: 'Israel Israeli', position: 'Owner & Manager' },
              { name: 'Sarah Cohen', position: 'Plant Expert' },
              { name: 'Yossi Levi', position: 'Gardening Consultant' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 