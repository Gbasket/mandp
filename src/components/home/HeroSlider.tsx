import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Award, Percent, Users } from "lucide-react";

const slides = [
  {
    id: 1,
    icon: Award,
    title: "Government Recognized",
    subtitle: "Natraaj World Packer & Movers Delhi NCR",
    description: "Trusted and certified relocation services",
  },
  {
    id: 2,
    icon: Percent,
    title: "Lowest Quotes",
    subtitle: "Save upto 20% on Shipping & Packing Charges",
    description: "Best rates guaranteed with quality service",
  },
  {
    id: 3,
    icon: Users,
    title: "10 Years + Experience",
    subtitle: "Highly Skilled Team of Professional Movers",
    description: "Expert handling for your precious belongings",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>


      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === currentSlide 
                  ? "opacity-100 translate-x-0" 
                  : index < currentSlide 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              }`}
            >
              <div className="container mx-auto px-4 text-center text-primary-foreground">
                <div className="max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <Icon className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-primary-foreground/70 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 ">
                      <ArrowRight className="w-5 h-5" /> Get Free Quote
                    </Link>
                    <a href="tel:+917983118393" className="bg-primary-foreground/10 text-primary-foreground flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300">
                      <Phone className="w-5 h-5" /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-secondary w-8" 
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
