import { Link } from "react-router-dom";
import { Truck, MapPin, Package, Bike, ArrowRight, Ship, Globe } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Intercity Packers & Movers",
    description: "Safe and reliable intercity relocation services across India with professional handling.",
    href: "/services/intercity",
  },
  {
    icon: Truck,
    title: "Intra City Packers & Movers",
    description: "Quick and efficient local moving services within your city at affordable rates.",
    href: "/services/intracity",
  },
  {
    icon: Package,
    title: "Packers",
    description: "Professional packing services using quality materials to ensure safety of your belongings.",
    href: "/services/packers",
  },
  {
    icon: Bike,
    title: "Bike Transport",
    description: "Specialized two-wheeler transport with secure loading and safe delivery.",
    href: "/services/bike-transport",
  },
  {
    icon: Truck,
    title: "Part Truck Shipping",
    description: "Cost-effective shared truck services for smaller shipments and partial loads.",
    href: "/services/part-truck",
  },
  {
    icon: Ship,
    title: "Full Truck Shipping",
    description: "Dedicated full truck services for large volume relocations and commercial moves.",
    href: "/services/full-truck",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global relocation services with complete documentation and customs clearance support.",
    href: "/services/international",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Complete <span className="text-secondary">Moving Solutions</span>
          </h2>
          <p className="section-subtitle">
            We offer comprehensive packing and moving services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-secondary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
