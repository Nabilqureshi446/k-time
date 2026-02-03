import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Sparkles } from "lucide-react";
import watchDetail from "@/assets/watch-detail.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Clock, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "500+", label: "Corporate Clients" },
    { icon: Award, value: "10K+", label: "Happy Customers" },
    { icon: Sparkles, value: "50+", label: "Premium Brands" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={watchDetail}
                alt="Luxury Watch Detail"
                className="rounded-2xl shadow-2xl shadow-gold/10"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-card border border-border p-6 rounded-xl shadow-xl glow-gold-sm"
              >
                <p className="text-gold font-display text-3xl font-bold">Since</p>
                <p className="text-foreground text-4xl font-bold">2009</p>
              </motion.div>
            </div>
            {/* Decorative Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold/10 rounded-full" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Moments of{" "}
              <span className="text-gradient-gold">Elegance</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              K Time was born from a passion for exquisite timepieces and the art of gifting. 
              For over 15 years, we have been curating premium watches and bespoke gifts 
              that mark life's most precious moments.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond retail, we've become the trusted partner for corporate gifting, 
              helping businesses across industries strengthen relationships through 
              thoughtful, customized gift solutions that leave lasting impressions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="p-3 rounded-lg bg-gold/10">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
