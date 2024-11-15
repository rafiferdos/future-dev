import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import testimonialsData from "../../../../public/data/testimonialsData";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Card1 from "./Card1";


const TestimonialsCard = () => {
  return (
    <div className="">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-full shadow"
      >
        <div className="mt-10">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[EffectCards, Autoplay]}
            className="w-full shadow"
          >
            {testimonialsData?.length > 0 &&
              testimonialsData?.map((user, index) => (
                <SwiperSlide
                  className="bg-white border-2 border-primary"
                  key={index}
                >
                  <Card1 user={user} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;
