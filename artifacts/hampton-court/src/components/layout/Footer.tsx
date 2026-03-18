import { Link } from "wouter";
import { Phone, MapPin, Mail, Clock, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Hampton Court Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Hampton Court
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pr-4">
              Compassionate Care. Dignified Recovery. A family-owned facility dedicated to your well-being.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-medium">Family Owned & Operated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Amenities', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                '24-Hour Skilled Nursing', 
                'Physical Therapy', 
                'Occupational Therapy', 
                'Speech Therapy', 
                'Short-Term Rehab',
                'Long-Term Care'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Hampton Court Blvd<br />
                  North Miami Beach, FL 33160<br />
                  <span className="text-sm text-gray-400 mt-1 block">[Placeholder Address]</span>
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <span>(305) 555-0100</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span>admissions@hamptoncourt.example.com</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span>
                  Visiting Hours:<br/>
                  8:00 AM - 8:00 PM Daily
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © 2026 Hampton Court Nursing & Rehabilitation Center. All rights reserved. 
            <span className="ml-2 text-primary hover:underline cursor-pointer">[Placeholder: Privacy Policy]</span>
          </p>
          <p className="px-3 py-1 bg-gray-800 rounded-md text-xs border border-gray-700">
            Prototype Website — Information & Testimonials are Placeholders
          </p>
        </div>
      </div>
    </footer>
  );
}
