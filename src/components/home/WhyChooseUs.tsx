import { Shield, Clock, BadgeCheck, Headphones, Wallet, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your belongings are fully insured and handled with utmost care throughout the journey.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We guarantee on-time pickup and delivery as per the committed schedule.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Team",
    description: "Trained and experienced staff ensuring quality service at every step.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock customer support to address all your queries and concerns.",
  },
  {
    icon: Wallet,
    title: "Affordable Rates",
    description: "Competitive pricing with no hidden charges. Get the best value for your money.",
  },
  {
    icon: TrendingUp,
    title: "Track Shipment",
    description: "Real-time tracking of your shipment for complete peace of mind.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title">
            We Make Your <span className="text-secondary">Moving Easy</span>
          </h2>
          <p className="section-subtitle">
            Experience hassle-free relocation with our trusted services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-xl border border-border hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
