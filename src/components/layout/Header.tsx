import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Intercity Packers & Movers", href: "/services/intercity" },
  { name: "Intra City Packers & Movers", href: "/services/intracity" },
  { name: "Packers", href: "/services/packers" },
  { name: "Bike Transport", href: "/services/bike-transport" },
  { name: "Part Truck Shipping", href: "/services/part-truck" },
  { name: "Full Truck Shipping", href: "/services/full-truck" },
  { name: "International Shipping", href: "/services/international" },
];

const branches = [
  { name: "Patparganj Industrial Area Delhi (Head Office)", href: "/branch/patparganj" },
  { name: "Ram Nagar Shahdara", href: "/branch/shahdara" },
  { name: "Uttam Nagar", href: "/branch/uttam-nagar" },
  { name: "Shalimar Garden Delhi", href: "/branch/shalimar-garden" },
  { name: "Noida Branch", href: "/branch/noida" },
  { name: "Gangapur City Rajasthan", href: "/branch/gangapur" },
  { name: "Dhanbad City Jharkhand", href: "/branch/dhanbad" },
  { name: "Surat Gujarat", href: "/branch/surat" },
];

const aboutItems = [
  { name: "About Us", href: "/about" },
  { name: "Team Members", href: "/about/team" },
  { name: "Mission & Vision", href: "/about/mission-vision" },
  { name: "Terms of Services", href: "/about/terms" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 xs-hidden hidden md:block">
        <div className="container mx-auto flex flex-wrap justify-end items-center text-sm gap-2">
            <a href="tel:07983118393" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 79831 18393</span>
            </a>
            <a href="mailto:mailbox.umang@gmail.com " className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span>mailbox.umang@gmail.com </span>
            </a>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Delhi NCR, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/logo.png"
                alt="Natraaj World Logo" 
                className="w-full h-full object-cover" 
              />
              {/* baaki text part same */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="nav-link">Home</Link>
              
              {/* About Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1">
                  About Us <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute top-full left-0 w-56 bg-popover border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${openDropdown === "about" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute top-full left-0 w-64 bg-popover border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${openDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Branch Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown("branch")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1">
                  Branch <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute top-full left-0 w-72 bg-popover border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${openDropdown === "branch" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                  {branches.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact#quote-form" className="btn-secondary">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-slide-in">
              <Link to="/" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              {/* Mobile About */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full text-foreground font-medium"
                  onClick={() => setOpenDropdown(openDropdown === "mobile-about" ? null : "mobile-about")}
                >
                  About Us <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "mobile-about" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "mobile-about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {aboutItems.map((item) => (
                      <Link key={item.name} to={item.href} className="block py-1 text-muted-foreground hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full text-foreground font-medium"
                  onClick={() => setOpenDropdown(openDropdown === "mobile-services" ? null : "mobile-services")}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "mobile-services" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "mobile-services" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((item) => (
                      <Link key={item.name} to={item.href} className="block py-1 text-muted-foreground hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Branch */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full text-foreground font-medium"
                  onClick={() => setOpenDropdown(openDropdown === "mobile-branch" ? null : "mobile-branch")}
                >
                  Branch <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "mobile-branch" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "mobile-branch" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {branches.map((item) => (
                      <Link key={item.name} to={item.href} className="block py-1 text-muted-foreground hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/gallery" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
              <Link to="/contact#quote-form" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              
              <Link to="/contact#quote-form" className="btn-secondary inline-block mt-4" onClick={() => setMobileMenuOpen(false)}>
                Get Free Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
