import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "HR Director",
      company: "TechCorp India",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "K Time has been our go-to partner for employee recognition gifts. Their attention to detail and timely delivery has made our reward programs truly special.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Procurement Manager",
      company: "Global Finance Ltd",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "The corporate gift hampers from K Time exceeded our expectations. Our clients were impressed with the premium quality and elegant packaging.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "CEO",
      company: "StartUp Ventures",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      content:
        "From festival gifts to welcome kits, K Time handles it all. Their customization options and competitive pricing make them the perfect B2B partner.",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      role: "Marketing Head",
      company: "Creative Solutions",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      content:
        "We've been sourcing watches from K Time for our top performers. The quality is exceptional and the after-sales service is outstanding.",
      rating: 5,
    },
  ];

  const corporateLogos = [
    { name: "TechCorp", initial: "T" },
    { name: "Global Finance", initial: "GF" },
    { name: "StartUp Ventures", initial: "SV" },
    { name: "Creative Solutions", initial: "CS" },
    { name: "Innovate Inc", initial: "II" },
    { name: "Prime Holdings", initial: "PH" },
    { name: "Elite Systems", initial: "ES" },
    { name: "Vertex Group", initial: "VG" },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/10 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-navy/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient-gold">500+ Companies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our corporate clients have to say about their experience with K Time.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-display">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full border-2 border-gold/30"
                  />
                  <div>
                    <p className="text-foreground font-semibold">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card border border-border hover:border-gold/50 text-foreground hover:text-gold transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-gold w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card border border-border hover:border-gold/50 text-foreground hover:text-gold transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Corporate Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-muted-foreground mb-8">
            Trusted by leading companies across India
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {corporateLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="group flex items-center justify-center w-24 h-16 md:w-32 md:h-20 bg-card/50 border border-border rounded-xl hover:border-gold/30 transition-all duration-300"
              >
                <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-gold transition-colors duration-300">
                  {logo.initial}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
