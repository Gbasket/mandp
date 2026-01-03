import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const galleryImages = [
  "/images/gallery/g1.jpeg",
  "/images/gallery/g2.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g4.jpeg",
  "/images/gallery/g5.jpeg",
  "/images/gallery/g6.jpeg",
];

const HomeGallery = () => {
  return (
    <section className="pt-0 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Gallery
          </span>
          <h2 className="section-title">
            Moving Moments <span className="text-secondary">Captured</span>
          </h2>
          <p className="section-subtitle">
            A glimpse of our packing & moving services
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl group">
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More */}
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
          >
            View Full Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeGallery;
