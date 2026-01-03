import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="font-bold">Natraaj World</h3>
                <p className="text-xs text-primary-foreground/70">Packers & Movers</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted partner for safe and reliable relocation services across India. 10+ years of experience in packing and moving.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services/intercity" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/intercity" className="text-primary-foreground/80 hover:text-secondary transition-colors">Intercity Packers</Link></li>
              <li><Link to="/services/intracity" className="text-primary-foreground/80 hover:text-secondary transition-colors">Intra City Movers</Link></li>
              <li><Link to="/services/bike-transport" className="text-primary-foreground/80 hover:text-secondary transition-colors">Bike Transport</Link></li>
              <li><Link to="/services/full-truck" className="text-primary-foreground/80 hover:text-secondary transition-colors">Full Truck Shipping</Link></li>
              <li><Link to="/services/international" className="text-primary-foreground/80 hover:text-secondary transition-colors">International Shipping</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Patparganj Industrial Area, Delhi NCR - 110092</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:07983118393" className="text-primary-foreground/80 hover:text-secondary transition-colors">+91 7983118393</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@natraajmovers.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">mailbox.umang@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-3">
        <div className="container mx-auto text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Natraaj World Packers & Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}