import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Filter, Search, X } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

// Product images
import watchGold from "@/assets/products/watch-gold.jpg";
import watchSilver from "@/assets/products/watch-silver.jpg";
import watchRose from "@/assets/products/watch-rose.jpg";
import giftFestive from "@/assets/products/gift-festive.jpg";
import giftDesk from "@/assets/products/gift-desk.jpg";
import giftWellness from "@/assets/products/gift-wellness.jpg";
import giftHamper from "@/assets/gift-hamper.jpg";
import corporateGift from "@/assets/corporate-gift.jpg";

interface Product {
  id: string;
  name: string;
  category: "watches" | "gifts" | "corporate";
  price: string;
  priceRange?: string;
  image: string;
  description: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic Gold Chronograph",
    category: "watches",
    price: "₹24,999",
    image: watchGold,
    description: "Elegant gold chronograph with leather strap, perfect for formal occasions.",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Modern Steel Timepiece",
    category: "watches",
    price: "₹18,499",
    image: watchSilver,
    description: "Sleek stainless steel watch with minimalist design for everyday wear.",
  },
  {
    id: "3",
    name: "Rose Gold Elegance",
    category: "watches",
    price: "₹21,999",
    image: watchRose,
    description: "Sophisticated women's watch with diamond accents and delicate chain bracelet.",
    badge: "New Arrival",
  },
  {
    id: "4",
    name: "Diwali Premium Hamper",
    category: "gifts",
    price: "₹4,999",
    priceRange: "₹4,999 - ₹15,999",
    image: giftFestive,
    description: "Luxurious festive gift box with dry fruits, sweets, and premium chocolates.",
    badge: "Festival Special",
  },
  {
    id: "5",
    name: "Executive Desk Set",
    category: "corporate",
    price: "₹3,499",
    priceRange: "₹3,499 - ₹8,999",
    image: giftDesk,
    description: "Premium leather desk accessories set perfect for executive gifting.",
  },
  {
    id: "6",
    name: "Wellness & Spa Collection",
    category: "gifts",
    price: "₹5,999",
    priceRange: "₹5,999 - ₹12,999",
    image: giftWellness,
    description: "Curated wellness gift set with aromatherapy candles and spa essentials.",
  },
  {
    id: "7",
    name: "Luxury Gift Hamper",
    category: "gifts",
    price: "₹7,999",
    priceRange: "₹7,999 - ₹25,999",
    image: giftHamper,
    description: "Premium gift hamper with gourmet treats and luxury lifestyle items.",
    badge: "Premium",
  },
  {
    id: "8",
    name: "Corporate Welcome Kit",
    category: "corporate",
    price: "₹2,999",
    priceRange: "₹2,999 - ₹6,999",
    image: corporateGift,
    description: "Complete welcome kit for new joiners with branded essentials.",
    badge: "Bulk Available",
  },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "watches", name: "Watches" },
  { id: "gifts", name: "Gift Hampers" },
  { id: "corporate", name: "Corporate Gifts" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquiry = (product: Product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the "${product.name}" (${product.priceRange || product.price}). Please share more details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="font-display text-xl font-bold text-gradient-gold">
              Product Catalog
            </h1>
            <div className="w-32" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <ScrollAnimation className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium <span className="text-gradient-gold">Products</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Browse our curated selection of luxury watches and premium gifts. 
              Click on any product to inquire via WhatsApp.
            </p>
          </ScrollAnimation>

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full focus:border-gold focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-gold text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-gold/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ScrollAnimation
                key={product.id}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-primary-foreground text-xs font-semibold rounded-full">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick Inquiry Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInquiry(product);
                        }}
                        className="p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gold text-xs font-medium uppercase tracking-wider mb-2">
                      {product.category === "watches"
                        ? "Watches"
                        : product.category === "gifts"
                        ? "Gift Hampers"
                        : "Corporate Gifts"}
                    </p>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-bold text-lg">
                        {product.priceRange || product.price}
                      </span>
                      <span className="text-gold text-sm font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 bg-card/80 rounded-full text-foreground hover:text-gold transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-primary-foreground text-xs font-semibold rounded-full">
                    {selectedProduct.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gold text-xs font-medium uppercase tracking-wider mb-2">
                  {selectedProduct.category === "watches"
                    ? "Premium Watches"
                    : selectedProduct.category === "gifts"
                    ? "Gift Hampers"
                    : "Corporate Gifts"}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mb-8">
                  <p className="text-muted-foreground text-sm mb-1">Price</p>
                  <p className="text-foreground font-bold text-2xl">
                    {selectedProduct.priceRange || selectedProduct.price}
                  </p>
                  {selectedProduct.priceRange && (
                    <p className="text-muted-foreground text-sm mt-1">
                      Price varies based on customization
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleInquiry(selectedProduct)}
                  className="w-full py-4 bg-[#25D366] text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Inquire on WhatsApp
                </button>

                <p className="text-muted-foreground text-sm text-center mt-4">
                  Get instant response from our team
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Products;
