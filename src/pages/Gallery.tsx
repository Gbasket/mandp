import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Package, Truck, Users, Home } from "lucide-react";

const galleryCategories = [
  { icon: Package, title: "Packing", count: 6 },
  { icon: Truck, title: "Transportation", count: 6 },
  { icon: Users, title: "Our Team", count: 4 },
  { icon: Home, title: "Relocation", count: 6 },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg text-primary-foreground/80">See our work in action</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Categories */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {galleryCategories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <div key={index} className="bg-card rounded-xl p-6 card-shadow text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count} Photos</p>
                  </div>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-muted rounded-xl overflow-hidden group relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-primary-foreground">
                      <Package className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Image</p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Truck className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-xs">Gallery Image {index + 1}</p>
                    </div>
                  </div>
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

export default Gallery;
