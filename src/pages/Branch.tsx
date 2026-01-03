import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const branchesData: Record<string, { name: string; address: string; phone: string; email: string; isHeadOffice?: boolean }> = {
  patparganj: {
    name: "Patparganj Industrial Area Delhi",
    address: "A-123, Patparganj Industrial Area, Delhi - 110092",
    phone: "+91 7983 118 393",
    email: "patparganj@natraajmovers.com",
    isHeadOffice: true,
  },
  shahdara: {
    name: "Ram Nagar Shahdara",
    address: "B-45, Ram Nagar, Shahdara, Delhi - 110032",
    phone: "+91 7983 118 393",
    email: "shahdara@natraajmovers.com",
  },
  "uttam-nagar": {
    name: "Uttam Nagar",
    address: "C-78, Uttam Nagar West, Delhi - 110059",
    phone: "+91 7983 118 393",
    email: "uttamnagar@natraajmovers.com",
  },
  "shalimar-garden": {
    name: "Shalimar Garden Delhi",
    address: "D-90, Shalimar Garden Main Road, Delhi - 110093",
    phone: "+91 7983 118 393",
    email: "shalimargarden@natraajmovers.com",
  },
  noida: {
    name: "Noida Branch",
    address: "E-12, Sector 62, Noida, UP - 201301",
    phone: "+91 7983 118 393",
    email: "noida@natraajmovers.com",
  },
  gangapur: {
    name: "Gangapur City Rajasthan",
    address: "F-34, Industrial Area, Gangapur City, Rajasthan - 322201",
    phone: "+91 7983 118 393",
    email: "gangapur@natraajmovers.com",
  },
  dhanbad: {
    name: "Dhanbad City Jharkhand",
    address: "G-56, Bank More, Dhanbad, Jharkhand - 826001",
    phone: "+91 7983 118 393",
    email: "dhanbad@natraajmovers.com",
  },
  surat: {
    name: "Surat Gujarat",
    address: "H-78, Ring Road, Surat, Gujarat - 395002",
    phone: "+91 7983 118 393",
    email: "surat@natraajmovers.com",
  },
};

const Branch = () => {
  const { branchId } = useParams();
  const branch = branchId ? branchesData[branchId] : null;

  if (!branch) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary py-20">
            <div className="container mx-auto px-4 text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Branches</h1>
              <p className="text-lg text-primary-foreground/80">Find us across India</p>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(branchesData).map(([key, br]) => (
                  <a
                    key={key}
                    href={`/branch/${key}`}
                    className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {br.name}
                        </h3>
                        {br.isHeadOffice && (
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">Head Office</span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{br.address}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{branch.name}</h1>
            {branch.isHeadOffice && (
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Head Office
              </span>
            )}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-xl p-8 card-shadow">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href={`tel:${branch.phone}`} className="text-muted-foreground hover:text-secondary transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href={`mailto:${branch.email}`} className="text-muted-foreground hover:text-secondary transition-colors">
                        {branch.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
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

export default Branch;
