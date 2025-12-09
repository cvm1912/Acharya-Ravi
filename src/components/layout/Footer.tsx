import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Consultancy", path: "/consultancy" },
  { name: "Services", path: "/services" },
  { name: "Remedies", path: "/remedies" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Personal Vastu Consultation",
  "Home & Flat Visit",
  "Office Vastu",
  "Factory Vastu",
  "Interior Design",
  "Kundali Analysis",
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://res.cloudinary.com/drjwxsvvb/image/upload/v1765287512/logo_cvux5f.png" alt="Vastu Ravi Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">Vastu Shastra</p>
                <p className="text-xs text-background/70">By RRavi Kumar</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Transform your living and working spaces with ancient Vastu wisdom for prosperity, 
              health, and harmony in life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/80">+91 9263218599</p>
                  
                </div>
              </li>
             
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm text-background/80">
                  Patna, Bihar, India <br />
                 
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Vastu Shastra by RRavi Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919263218599"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
