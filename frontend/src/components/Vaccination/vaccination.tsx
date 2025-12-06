import "./vaccination.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpg";
import anh4 from "../../assets/anh4.jpg";

export default function Vaccination() {
  return (
    <div className="tiemchung-wrapper">
      <div className="center-list">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {[anh1, anh2, anh3, anh4, anh1, anh2].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="center-item">
                <img src={img} alt="Pharbaco" />
                <p>Phòng tiêm vắc xin Pharbaco – Hà Nội</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
