import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import watchesCollection from "@/assets/watches-collection.jpg";
import giftHamper from "@/assets/gift-hamper.jpg";
import corporateGift from "@/assets/corporate-gift.jpg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      title: "Premium Watches",
      description:
        "Explore our curated collection of luxury timepieces from world-renowned brands. From classic elegance to modern sophistication.",
      image: watchesCollection,
      link: "/products?category=watches",
    },
    {
      title: "Gift Hampers",
      description:
        "Beautifully crafted gift hampers for every occasion. Perfect for festivals, celebrations, and corporate events.",
      image: giftHamper,
      link: "/products?category=gifts",
    },
    {
      title: "Corporate Gifts",
      description:
        "Elevate your business relationships with premium corporate gifts. Customized solutions for employee recognition and client appreciation.",
      image: corporateGift,
      link: "/products?category=corporate",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
            Our Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Curated for <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked selection of premium timepieces and gifts, 
            each chosen for its exceptional quality and timeless appeal.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-2 text-gold font-semibold group/link"
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gold/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full hover-glow-gold transition-all duration-300 hover:scale-105 items-center gap-2"
          >
            View Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
