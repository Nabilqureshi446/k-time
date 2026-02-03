import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";
import giftHamper from "@/assets/gift-hamper.jpg";
import corporateGift from "@/assets/corporate-gift.jpg";
import watchesCollection from "@/assets/watches-collection.jpg";
import customGift from "@/assets/custom-gift.jpg";
import watchDetail from "@/assets/watch-detail.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroWatch, alt: "Premium Luxury Watch", size: "large" },
    { src: giftHamper, alt: "Gift Hamper Collection", size: "small" },
    { src: watchDetail, alt: "Watch Craftsmanship", size: "small" },
    { src: corporateGift, alt: "Corporate Gift Set", size: "small" },
    { src: watchesCollection, alt: "Watches Display", size: "large" },
    { src: customGift, alt: "Custom Branded Gifts", size: "small" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Glimpses of <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of premium timepieces and curated gifts that 
            define luxury and elegance.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                image.size === "large" ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-medium">{image.alt}</p>
              </div>
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
