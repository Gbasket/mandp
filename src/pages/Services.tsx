import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle, Truck, MapPin, Package, Bike, Ship, Globe } from "lucide-react";

const servicesData: Record<
  string,
  {
    icon: any;
    title: string;
    description: string | string[];
    features: string[];
  }
> = {
  intercity: {
    icon: MapPin,
    title: "Intercity Packers & Movers",
    description: [
      "Natraaj World Packers and Movers offers dependable intercity packing and moving services designed to make long-distance relocation simple and hassle-free. Serving customers across Delhi NCR and major cities in India, we ensure that household and office goods are packed with high-quality materials and handled by trained professionals to minimize risk during transit.",
      "Our team follows a systematic process that includes careful packing, secure loading, and well-managed transportation to ensure timely and safe delivery. Special attention is given to fragile items, furniture, and appliances, ensuring they reach their destination in proper condition.",
      "With transparent pricing, dedicated coordination, and a strong focus on customer satisfaction, Natraaj World Packers and Movers is committed to delivering a smooth and reliable intercity moving experience you can trust.",
    ],
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
    description:[
      "Natraaj World Packers and Movers provides efficient and dependable intracity packing and moving services across Delhi NCR. Whether you are relocating your home or office within the same city, our trained team ensures careful packing, safe handling, and smooth transportation of your belongings.",
      "We use quality packing materials and follow a systematic loading and unloading process to minimize damage and delays. Our services are designed to handle short-distance moves quickly while maintaining the same level of care and professionalism as long-distance relocations.",
      "With flexible scheduling, transparent pricing, and a customer-focused approach, Natraaj World Packers and Movers makes intracity moving convenient, timely, and stress-free.",
    ],
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
    description:[
      "Natraaj World Packers and Movers offers professional packing-only services for customers who require safe and organized packing without transportation. Our trained packers use high-quality packing materials and proven techniques to protect household goods, office items, and fragile belongings.",
      "Each item is packed with care to reduce the risk of damage during storage or transit. This service is ideal for customers managing their own transportation or requiring expert packing support for partial or complete relocations.",
    ],
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
    description:[
      "Our bike transportation service ensures safe and secure movement of two-wheelers within and outside Delhi NCR. We use proper packing, cushioning, and secure loading methods to protect your bike from scratches and transit-related damage.",
      "From pickup to delivery, our team handles your vehicle responsibly, ensuring timely transport and careful unloading at the destination.",
    ],
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
    description:[
      "Natraaj World Packers and Movers provides cost-effective part truck shipping solutions for customers with smaller shipment volumes. Your goods are consolidated with other consignments while being packed and loaded securely to prevent damage.",
      "This service is ideal for partial household moves or limited cargo, offering a balance between affordability and safe transportation across cities.",
    ],
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
    description:[
      "Our full truck shipping service is designed for customers requiring exclusive use of a dedicated vehicle for their goods. This ensures faster transit, minimal handling, and enhanced safety throughout the journey.",
      "We manage the entire process, from packing and loading to transportation and delivery, providing a reliable solution for large household or commercial shipments.",
    ],
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
    description:[
      "Natraaj World Packers and Movers offers international shipping services tailored to overseas relocation and cargo movement needs. We handle professional packing, documentation support, and coordination to ensure smooth international transit.",
      "With a focus on compliance, safety, and timely delivery, our international shipping solutions provide customers with confidence and peace of mind when moving goods across borders."
    ],
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

  // Services Listing Page
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary py-20">
            <div className="container mx-auto px-4 text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-primary-foreground/80">
                Comprehensive moving solutions for all your needs
              </p>
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
                      <p className="text-muted-foreground text-sm">
                        {Array.isArray(svc.description)
                          ? svc.description[0].substring(0, 100) + "..."
                          : svc.description.substring(0, 100) + "..."}
                      </p>
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

  // Single Service Page
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
              <div className="text-lg text-muted-foreground leading-relaxed mb-12 space-y-5 text-center">
                {Array.isArray(service.description)
                  ? service.description.map((para, index) => <p key={index}>{para}</p>)
                  : <p>{service.description}</p>
                }
              </div>

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
