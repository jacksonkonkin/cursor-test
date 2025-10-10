import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "Premium Athletic Socks",
    price: 24.99,
    originalPrice: 29.99,
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    category: "Athletic",
    description: "High-performance socks with moisture-wicking technology designed for athletes and active individuals. These socks feature advanced fabric technology that keeps your feet dry and comfortable during intense workouts.",
    longDescription: "Our Premium Athletic Socks are engineered with cutting-edge moisture-wicking technology that pulls sweat away from your skin, keeping your feet dry and comfortable even during the most intense workouts. The seamless toe construction eliminates irritation and blisters, while the arch support provides stability and reduces fatigue. Made from a blend of premium synthetic fibers and natural materials, these socks offer the perfect balance of comfort, durability, and performance.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1E3A8A" },
      { name: "Gray", hex: "#6B7280" }
    ],
    features: [
      "Moisture-wicking technology",
      "Seamless toe construction",
      "Arch support",
      "Breathable mesh panels",
      "Anti-odor treatment",
      "Machine washable"
    ],
    specifications: {
      material: "85% Polyester, 10% Nylon, 5% Spandex",
      care: "Machine wash cold, tumble dry low",
      origin: "Made in USA",
      warranty: "30-day satisfaction guarantee"
    }
  },
  {
    id: 2,
    name: "Classic Dress Socks",
    price: 19.99,
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    category: "Dress",
    description: "Elegant dress socks perfect for business and formal occasions. Made from premium materials for comfort and style.",
    longDescription: "Our Classic Dress Socks are the perfect choice for professional and formal occasions. Crafted from premium cotton and silk blend, these socks offer exceptional comfort while maintaining a polished appearance. The reinforced heel and toe ensure durability, while the subtle patterns add a touch of sophistication to any outfit.",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1E3A8A" },
      { name: "Charcoal", hex: "#374151" }
    ],
    features: [
      "Premium cotton blend",
      "Reinforced heel and toe",
      "Subtle patterns",
      "Comfortable fit",
      "Professional appearance"
    ],
    specifications: {
      material: "70% Cotton, 25% Polyester, 5% Elastane",
      care: "Machine wash cold, hang dry",
      origin: "Made in Italy",
      warranty: "30-day satisfaction guarantee"
    }
  }
];

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li>/</li>
            <li><Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-blue-600">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-3 bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-colors"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button className="px-4 py-2 hover:bg-gray-100">-</button>
                  <span className="px-4 py-2 border-x border-gray-300">1</span>
                  <button className="px-4 py-2 hover:bg-gray-100">+</button>
                </div>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <dl className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <dt className="w-24 text-gray-600 capitalize">{key}:</dt>
                    <dd className="text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
            <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
