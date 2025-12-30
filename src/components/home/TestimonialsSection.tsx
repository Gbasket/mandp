import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi to Mumbai",
    rating: 5,
    text: "Excellent service! The team was very professional and careful with all my belongings. Highly recommend Natraaj World Packers.",
  },
  {
    name: "Priya Sharma",
    location: "Noida to Bangalore",
    rating: 5,
    text: "Very affordable rates and timely delivery. The packing quality was outstanding. Will definitely use their services again.",
  },
  {
    name: "Amit Singh",
    location: "Gurugram to Chennai",
    rating: 5,
    text: "Smooth relocation experience from start to finish. The team kept me updated throughout. Great customer service!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-title">
            What Our <span className="text-secondary">Customers Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 card-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
