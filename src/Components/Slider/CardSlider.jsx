import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./CardSlider.module.css";
import { Navigation, Autoplay } from "swiper/modules";

export default function CardSlider({ children, duration }) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation
        loop={true}
        speed={1000}
        autoplay={{
          delay: duration || 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
