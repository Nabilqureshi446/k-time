import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Gem, HeartHandshake, Truck, Award } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Guaranteed genuine products from authorized dealers and brands.",
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Handpicked selection of only the finest watches and gifts.",
    },
    {
      icon: HeartHandshake,
      title: "Customization",
      description: "Personalize your gifts with custom branding and packaging.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Reliable pan-India delivery ensuring your gifts arrive on time.",
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Trusted expertise in watches and corporate gifting since 2009.",
    },
    {
      icon: Award,
      title: "After-Sales Support",
      description: "Dedicated customer service and warranty support for all products.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
            Why K Time
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The K Time <span className="text-gradient-gold">Promise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference of working with a partner who values quality, 
            trust, and customer satisfaction above all else.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-gold/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 inline-block">
                <div className="p-4 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300 relative">
                  <reason.icon className="w-8 h-8 text-gold" />
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-xl border border-gold/30 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
