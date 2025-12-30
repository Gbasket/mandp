import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Users, Target, Eye } from "lucide-react";
import { title } from "node:process";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-primary-foreground/80">Your trusted partner for safe and reliable relocation</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-8">
                Natraaj World Packers and Movers <span className="text-secondary">(Delhi NCR)</span>
              </h2>
              <p className="text-muted-foreground text-center text-lg leading-relaxed">
                These Terms of Service (“Terms”) govern the provision of packing, moving, transportation, loading, unloading, and related services (“Services”) by Natraaj World Packers and Movers (“Company”, “We”, “Us”, or “Our”) to the customer (“Client”, “You”, or “Your”).
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-background pb-16">
          <div className="container mx-auto px-4">
            <h6 className="section-subtitle text-center mb-12">By booking or availing our Services, you agree to be bound by these Terms.</h6>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Scope of Services", desc: "1.1 The Company provides household shifting, office relocation, local and intercity transportation, packing and unpacking services, loading and unloading, and allied services within and outside the Delhi NCR region. 1.2 Services shall be provided as per the written quotation, invoice, or booking confirmation issued by the Company. 1.3 Any service not expressly mentioned in the quotation shall be considered excluded unless agreed in writing." },
                { title: "Booking & Confirmation", desc: "2.1 A booking is considered confirmed only after acceptance of the quotation and payment of the applicable advance (if any). 2.2 The Client must provide accurate details regarding goods, locations, access conditions, and timelines. Any discrepancy may result in additional charges or service delays." },
                { title: "Pricing & Payment", desc: "3.1 All prices are based on the information provided by the Client and are subject to revision if actual conditions differ (volume, weight, distance, floor level, packing requirements, etc.). 3.2 Additional charges may apply for:Extra packing materials or special packing requirements Staircase carry, long carry, or lift non-availability Waiting time due to Client delays Restricted entry areas, night permits, or special permissions 3.3 Full payment must be cleared as per agreed terms, typically before or at the time of delivery. 3.4 Delayed payments may attract penalties or withholding of delivery. " },
                { title: "Client Responsibilities", desc: "4.1 The Client must:Declare all items accurately, including fragile, valuable, or hazardous goodsProvide necessary access and permissions for loading/unloadingEnsure timely presence during packing, loading, unloading, and delivery Remove or declare valuables, cash, jewelry, documents, and fragile items Ensure safe access to premises (parking, lift access, entry permissions) 4.2 The Company shall not be responsible for items packed by the Client unless explicitly agreed otherwise." },
                { title: "Prohibited & Restricted Items", desc: "5.1 The Client must not include hazardous, illegal, or prohibited items, including but not limited to:Explosives, flammable substances, chemicals Narcotics, illegal goods, firearms, ammunition Perishable or combustible items 5.2 The Company reserves the right to refuse transport if prohibited items are discovered." },
                { title: "Insurance", desc: "6.1 Transit insurance is optional and will be provided only if specifically requested and paid for by the Client. 6.2 Without insurance, the Company’s liability shall be limited as stated in Clause 7. 6.3 Insurance claims, if applicable, are subject to the insurer’s terms and conditions." },
                { title: "Liability & Damage", desc: "7.1 The Company shall take reasonable care in handling goods; however, minor wear and tear (scratches, dents) are inherent risks of transportation. 7.2 The Company shall not be liable for:Damage due to poor quality or old furniture Electrical or mechanical malfunction after transit Natural calamities, accidents, riots, strikes, or unforeseen events 7.3 Any damage or loss must be reported in writing within 24 hours of delivery. Claims made after this period may not be entertained. 7.4 Liability, if accepted, shall be limited to repair or depreciation value as determined by the Company or insurer." },
                { title: "Delays & Force Majeure", desc: "8.1 Delivery timelines are estimated and may vary due to traffic, weather, road conditions, government restrictions, or force majeure events. 8.2 The Company shall not be liable for delays caused by circumstances beyond its reasonable control." },
                { title: "Cancellation & Rescheduling", desc: "9.1 Cancellations must be informed in writing. 9.2 Cancellation charges may apply depending on the stage of service preparation. 9.3 Rescheduling is subject to availability and may incur additional costs." },
                { title: "Storage (If Applicable)", desc: "10.1 Storage services, if availed, shall be governed by separate terms regarding duration, safety, and charges. 10.2 The Company is not responsible for deterioration due to prolonged storage unless caused by negligence." },
                { title: "Governing Law & Jurisdiction", desc: "11.1 These Terms shall be governed by the laws of India. 11.2 Courts in Delhi NCR shall have exclusive jurisdiction over any disputes arising out of these Terms." },
                { title: "Amendments", desc: "12.1 The Company reserves the right to amend these Terms at any time without prior notice. 12.2 Updated Terms shall apply to all future bookings." },
                { title: "Contact Information", desc: "For queries or service-related communication, please contact: Natraaj World Packers and Movers, Delhi NCR, India" },
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-xl border border-border hover:border-secondary/30 transition-colors">
                  <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 card-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide reliable, efficient, and affordable relocation services while ensuring the safety and security of our customers' belongings. We strive to make every move a stress-free experience through our professional approach and dedicated service.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 card-shadow">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred packers and movers company in India, known for our exceptional service quality, customer satisfaction, and innovative solutions in the logistics industry.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Team */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Meet Our <span className="text-secondary">Team</span></h2>
              <p className="section-subtitle">Experienced professionals dedicated to your satisfaction</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Rakesh Verma", role: "Founder & CEO" },
                { name: "Sunil Kumar", role: "Operations Head" },
                { name: "Priya Singh", role: "Customer Relations" },
                { name: "Amit Sharma", role: "Logistics Manager" },
              ].map((member, index) => (
                <div key={index} className="bg-card rounded-xl p-6 card-shadow text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
