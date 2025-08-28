'use client';
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandSlider() {
  const brands = [
    "brand-1.png",
    "brand-2.png",
    "brand-3.webp",
    "brand-4.png",
    "brand-5.webp",
    "brand-1.png",
    "brand-2.png",
    "brand-3.webp",
    "brand-4.png",
    "brand-5.webp",
  ];

  return (
    <div className="jos brand-slider" data-jos_animation="fade">
      <Swiper
        slidesPerView={2}
        spaceBetween={105}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {brands.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/assets/img_placeholder/th-1/${src}`}
              alt="Customer brand"
              width="180"
              height="40"
              className="max-w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}