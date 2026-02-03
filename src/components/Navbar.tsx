import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Products", href: "/products" },
    { name: "B2B Solutions", href: isHomePage ? "#b2b" : "/#b2b" },
    { name: "Gallery", href: isHomePage ? "#gallery" : "/#gallery" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/") && !href.startsWith("/#")) {
      return; // Let Link handle it
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark shadow-lg shadow-gold/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Clock className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display text-2xl font-bold text-gradient-gold">
              K Time
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href === "/products" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-foreground/80 hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground/80 hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to={isHomePage ? "#contact" : "/#contact"}
              className="px-6 py-2.5 bg-gradient-gold text-primary-foreground font-semibold rounded-full hover-glow-gold transition-all duration-300 hover:scale-105 text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                link.href === "/products" ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-foreground/80 hover:text-gold transition-colors duration-300 font-medium py-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-gold transition-colors duration-300 font-medium py-2"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <Link
                to={isHomePage ? "#contact" : "/#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-full text-center hover-glow-gold"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
