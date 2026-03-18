import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Amenities", href: "/amenities" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Hampton Court Logo" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">
                Hampton Court
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Nursing & Rehabilitation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l pl-6 border-border">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-4 h-4" />
                <span>(305) 555-0100</span>
              </div>
              <Link href="/contact" className="inline-block">
                <Button className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen border-t border-border" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-px w-full bg-border my-2"></div>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-5 h-5" />
              <span>(305) 555-0100</span>
            </div>
            <Link href="/contact" className="w-full">
              <Button className="w-full rounded-xl py-6 text-lg shadow-md">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
