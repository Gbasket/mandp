import { Link } from "react-router-dom";
import { CheckCircle, Truck, Shield, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Professional Fleet of Vehicles" },
  { icon: Shield, text: "100% Safe & Secure Packing" },
  { icon: Clock, text: "On-Time Delivery Guaranteed" },
  { icon: CheckCircle, text: "Experienced & Trained Staff" },
];

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="section-title">
              Your Trusted Partner for <span className="text-secondary">Safe Relocation</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Natraaj World Packers & Movers was founded by former employees of GATI CARGO and DELHIVERY COURIER with experience of more than 10 Years in Packers & Movers in area of Delhi NCR. We not only understand needs related to relocation services like Safety, Timely Delivery and Cost Effectiveness but also are well equipped to tackle challenges faced like space management, vehicle arrangements and skilled labor requirements.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With years of rich experience we at Natraaj World Packers & Movers assure you with Hassle Free Moving experience without extra burden on your pockets. We serve all areas of Delhi NCR including Delhi, Faridabad, Noida, Gurugram, Loni & other adjoining localities.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>

          {/* Image/Stats */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative grid grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 card-shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div className="bg-card rounded-xl p-6 card-shadow text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                  <p className="text-muted-foreground text-sm">Happy Customers</p>
                </div>
                <div className="bg-card rounded-xl p-6 card-shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <p className="text-muted-foreground text-sm">Branch Offices</p>
                </div>
                <div className="bg-card rounded-xl p-6 card-shadow text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                  <p className="text-muted-foreground text-sm">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
