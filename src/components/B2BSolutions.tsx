import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Palette, Truck, Users, CheckCircle } from "lucide-react";
import customGift from "@/assets/custom-gift.jpg";

const B2BSolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Competitive pricing for large corporate orders with flexible MOQ options.",
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Add your company logo and branding to create personalized corporate gifts.",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Reliable delivery network ensuring timely gifting across all locations.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers to handle all your corporate gifting needs.",
    },
  ];

  const benefits = [
    "Employee Recognition Programs",
    "Client Appreciation Gifts",
    "Festival Gifting Solutions",
    "Corporate Event Giveaways",
    "Milestone Celebrations",
    "Welcome Kits for New Joiners",
  ];

  return (
    <section id="b2b" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-background to-background" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
              B2B Solutions
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Elevate Your{" "}
              <span className="text-gradient-gold">Corporate Gifting</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Partner with K Time for all your corporate gifting needs. From bulk orders 
              to custom branding, we provide end-to-end solutions that strengthen your 
              business relationships and leave lasting impressions.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full hover-glow-gold transition-all duration-300 hover:scale-105"
            >
              Request Corporate Quote
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={customGift}
                alt="Custom Corporate Gifts"
                className="rounded-2xl shadow-2xl shadow-gold/10"
              />
              
              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-card border border-border p-6 rounded-xl shadow-xl max-w-xs"
              >
                <h4 className="font-semibold text-foreground mb-4">Perfect For</h4>
                <div className="space-y-2">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/20 rounded-full" />
            <div className="absolute -bottom-6 right-12 w-16 h-16 border border-gold/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BSolutions;
