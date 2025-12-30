import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromCity: "",
    toCity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", fromCity: "", toCity: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80">Get in touch for a free quote</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                
                <div className="bg-card rounded-xl p-6 card-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Head Office</h3>
                      <p className="text-muted-foreground text-sm">Patparganj Industrial Area, Delhi NCR - 110092</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 card-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 card-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@natraajmovers.com" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                        info@natraajmovers.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 card-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2" id="quote-form">
                <div className="bg-card rounded-xl p-8 card-shadow">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Request a Free Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Your phone"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">From City *</label>
                        <input
                          type="text"
                          name="fromCity"
                          value={formData.fromCity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Origin city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">To City *</label>
                        <input
                          type="text"
                          name="toCity"
                          value={formData.toCity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Destination city"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        placeholder="Tell us about your moving requirements..."
                      />
                    </div>

                    <button type="submit" className="btn-secondary w-full flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" /> Submit Quote Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
