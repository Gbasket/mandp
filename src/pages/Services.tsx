import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle, Truck, MapPin, Package, Bike, Ship, Globe } from "lucide-react";

const servicesData: Record<string, { icon: any; title: string; description: string; features: string[] }> = {
  intercity: {
    icon: MapPin,
    title: "Intercity Packers & Movers",
    description: "Our intercity packers and movers service provides safe and reliable relocation solutions for long-distance moves across India. We handle everything from packing to delivery with utmost care.",
    features: [
      "Door-to-door pickup and delivery",
      "Professional packing with quality materials",
      "GPS-enabled vehicle tracking",
      "Insurance coverage for goods",
      "Dedicated move coordinator",
      "Unpacking and arrangement services",
    ],
  },
  intracity: {
    icon: Truck,
    title: "Intra City Packers & Movers",
    description: "Quick and efficient local moving services within your city. Perfect for residential and commercial relocations with same-day or next-day delivery options.",
    features: [
      "Same-day delivery available",
      "Flexible scheduling options",
      "Trained moving professionals",
      "Careful handling of all items",
      "Competitive local rates",
      "Mini to large truck options",
    ],
  },
  packers: {
    icon: Package,
    title: "Professional Packing Services",
    description: "Expert packing services using high-quality materials to ensure your belongings are protected during transit. We pack everything from delicate items to heavy furniture.",
    features: [
      "Multi-layer packing for fragile items",
      "Custom crating for valuable goods",
      "Wardrobe boxes for clothes",
      "Bubble wrap and foam protection",
      "Labeled boxes for easy unpacking",
      "Eco-friendly packing materials",
    ],
  },
  "bike-transport": {
    icon: Bike,
    title: "Bike Transport Services",
    description: "Specialized two-wheeler transport service with secure loading, proper packaging, and safe delivery. Your bike is treated with the care it deserves.",
    features: [
      "Secure bike packaging",
      "Enclosed transport vehicles",
      "Door-to-door delivery",
      "Insurance coverage",
      "Real-time tracking",
      "Affordable rates",
    ],
  },
  "part-truck": {
    icon: Truck,
    title: "Part Truck Shipping",
    description: "Cost-effective shared truck services for smaller shipments. Share truck space with other consignments and save on transportation costs.",
    features: [
      "Economical shipping option",
      "Regular scheduled departures",
      "Suitable for partial loads",
      "Safe and secure transit",
      "Pan-India network",
      "Tracking available",
    ],
  },
  "full-truck": {
    icon: Ship,
    title: "Full Truck Shipping",
    description: "Dedicated full truck services for large volume relocations and commercial moves. Get exclusive use of the entire vehicle for your shipment.",
    features: [
      "Exclusive truck usage",
      "Faster delivery times",
      "Ideal for large shipments",
      "Direct transportation",
      "Customizable schedules",
      "Commercial moving solutions",
    ],
  },
  international: {
    icon: Globe,
    title: "International Shipping",
    description: "Global relocation services with complete documentation and customs clearance support. We help you move anywhere in the world with ease.",
    features: [
      "Air and sea freight options",
      "Customs documentation support",
      "International packing standards",
      "Door-to-door global delivery",
      "Storage solutions available",
      "Dedicated international team",
    ],
  },
};

const Services = () => {
  const { serviceType } = useParams();
  const service = serviceType ? servicesData[serviceType] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary py-20">
            <div className="container mx-auto px-4 text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-primary-foreground/80">Comprehensive moving solutions for all your needs</p>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(servicesData).map(([key, svc]) => {
                  const Icon = svc.icon;
                  return (
                    <a
                      key={key}
                      href={`/services/${key}`}
                      className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                        <Icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm">{svc.description.substring(0, 100)}...</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
                {service.description}
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">Service Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
