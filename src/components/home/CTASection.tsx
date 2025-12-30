import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move? Get Your Free Quote Today!
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us now for a hassle-free moving experience. Our team is ready to assist you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+917983118393"
              className="bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
