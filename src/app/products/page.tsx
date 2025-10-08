import Link from "next/link";
import Image from "next/image";

// Extended product data
const products = [
  {
    id: 1,
    name: "Premium Athletic Socks",
    price: 24.99,
    originalPrice: 29.99,
    image: "/api/placeholder/300/300",
    category: "Athletic",
    description: "High-performance socks with moisture-wicking technology",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Gray"]
  },
  {
    id: 2,
    name: "Classic Dress Socks",
    price: 19.99,
    image: "/api/placeholder/300/300",
    category: "Dress",
    description: "Elegant dress socks perfect for business and formal occasions",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: 3,
    name: "Cozy Casual Socks",
    price: 16.99,
    image: "/api/placeholder/300/300",
    category: "Casual",
    description: "Comfortable everyday socks for relaxed style",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Beige", "Navy", "Black"]
  },
  {
    id: 4,
    name: "Merino Wool Socks",
    price: 29.99,
    image: "/api/placeholder/300/300",
    category: "Premium",
    description: "Luxurious merino wool socks for ultimate comfort",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    sizes: ["M", "L", "XL"],
    colors: ["Natural", "Charcoal", "Navy"]
  },
  {
    id: 5,
    name: "Running Performance Socks",
    price: 22.99,
    image: "/api/placeholder/300/300",
    category: "Athletic",
    description: "Designed for runners with arch support and breathability",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue", "Red"]
  },
  {
    id: 6,
    name: "Business Formal Socks",
    price: 21.99,
    image: "/api/placeholder/300/300",
    category: "Dress",
    description: "Professional dress socks for corporate environments",
    rating: 4.4,
    reviews: 73,
    inStock: true,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Navy", "Charcoal", "Brown"]
  },
  {
    id: 7,
    name: "Hiking Socks",
    price: 26.99,
    image: "/api/placeholder/300/300",
    category: "Athletic",
    description: "Durable socks for outdoor adventures and hiking",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    sizes: ["M", "L", "XL"],
    colors: ["Green", "Brown", "Gray", "Black"]
  },
  {
    id: 8,
    name: "No-Show Socks",
    price: 14.99,
    image: "/api/placeholder/300/300",
    category: "Casual",
    description: "Invisible socks that stay hidden in your shoes",
    rating: 4.3,
    reviews: 145,
    inStock: false,
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Nude"]
  }
];

const categories = ["All", "Athletic", "Dress", "Casual", "Premium"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Socks
          </h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of premium socks
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Under $20
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    $20 - $30
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Over $30
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  In Stock Only
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {products.length} products
              </p>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
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

                    {/* Sizes */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Sizes:</p>
                      <div className="flex space-x-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            className="w-8 h-8 border border-gray-300 rounded text-sm hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                        product.inStock
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
