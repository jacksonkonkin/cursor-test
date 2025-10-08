import Link from "next/link";
import Image from "next/image";

// Mock product data by category
const categoryProducts = {
  athletic: [
    {
      id: 1,
      name: "Premium Athletic Socks",
      price: 24.99,
      originalPrice: 29.99,
      image: "/api/placeholder/300/300",
      description: "High-performance socks with moisture-wicking technology",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 5,
      name: "Running Performance Socks",
      price: 22.99,
      image: "/api/placeholder/300/300",
      description: "Designed for runners with arch support and breathability",
      rating: 4.5,
      reviews: 98
    },
    {
      id: 7,
      name: "Hiking Socks",
      price: 26.99,
      image: "/api/placeholder/300/300",
      description: "Durable socks for outdoor adventures and hiking",
      rating: 4.6,
      reviews: 112
    }
  ],
  dress: [
    {
      id: 2,
      name: "Classic Dress Socks",
      price: 19.99,
      image: "/api/placeholder/300/300",
      description: "Elegant dress socks perfect for business and formal occasions",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 6,
      name: "Business Formal Socks",
      price: 21.99,
      image: "/api/placeholder/300/300",
      description: "Professional dress socks for corporate environments",
      rating: 4.4,
      reviews: 73
    }
  ],
  casual: [
    {
      id: 3,
      name: "Cozy Casual Socks",
      price: 16.99,
      image: "/api/placeholder/300/300",
      description: "Comfortable everyday socks for relaxed style",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 8,
      name: "No-Show Socks",
      price: 14.99,
      image: "/api/placeholder/300/300",
      description: "Invisible socks that stay hidden in your shoes",
      rating: 4.3,
      reviews: 145
    }
  ]
};

const categoryInfo = {
  athletic: {
    name: "Athletic Socks",
    description: "High-performance socks designed for sports and active lifestyle",
    heroImage: "/api/placeholder/800/400",
    features: [
      "Moisture-wicking technology",
      "Arch support",
      "Seamless construction",
      "Breathable materials"
    ]
  },
  dress: {
    name: "Dress Socks",
    description: "Elegant socks perfect for business and formal occasions",
    heroImage: "/api/placeholder/800/400",
    features: [
      "Premium materials",
      "Professional appearance",
      "Comfortable fit",
      "Subtle patterns"
    ]
  },
  casual: {
    name: "Casual Socks",
    description: "Comfortable everyday socks for relaxed style",
    heroImage: "/api/placeholder/800/400",
    features: [
      "Everyday comfort",
      "Soft materials",
      "Easy care",
      "Versatile styles"
    ]
  }
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category.toLowerCase();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];
  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!info) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {info.name}
              </h1>
              <p className="text-xl mb-8">
                {info.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {info.features.map((feature, index) => (
                  <span key={index} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white bg-opacity-10 rounded-lg overflow-hidden">
                <Image
                  src={info.heroImage}
                  alt={info.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {info.name} Collection
            </h2>
            <p className="text-gray-600">
              {products.length} products
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-200 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        Sale
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex space-x-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center"
                      >
                        View Details
                      </Link>
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">We're working on adding more products to this category.</p>
              <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All Products
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
