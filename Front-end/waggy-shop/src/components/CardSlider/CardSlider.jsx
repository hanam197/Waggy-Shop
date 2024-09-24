import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceData from "../../data/ServiceData";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

function CardSlider() {
  return (
    <div className="banner bg-[#F9F3EC]">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, FreeMode]}
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <div>
                  <img alt="title" src={item.img}></img>
                </div>
                <div className="flex-col content-center space-y-7 p-12">
                  <div className="text-2xl text-[#DEAD6F] uppercase">
                    {item.discount}
                  </div>
                  <p className="text-7xl font-chilanka">{item.title}</p>
                  <Button
                    size="large"
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CardSlider;
