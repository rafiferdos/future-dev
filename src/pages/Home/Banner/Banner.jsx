import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import banner1 from "/banner1.png";
import banner2 from "/banner2.png";
import banner3 from "/banner3.png";
import banner4 from "/banner4.png";
import banner5 from "/banner5.png";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";





const Banner = () => {
  const [smallBan, setSmallBan] = useState(window.innerWidth < 768);
    useEffect(() => {
      const handleResize =()=>setSmallBan(window.innerWidth < 768);
      window.addEventListener(
        "resize",
        handleResize
      );
    }, []);
  return (
    <>
      {smallBan ? (
        <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={banner1} className="rounded-lg max-w-sm " />
            <div className="max-w-xl">
              <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                Empower Your Child's Future with Live Coding and Robotics
                Classes.
              </h1>
              <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                Unlock your child's creativity with hands-on, interactive
                classes in coding and robotics, specially designed for young
                learners.
              </p>
              <Button text="Join Today" link="#" />
            </div>
          </div>
        </div>
      ) : (
        <Swiper
          autoplay={{
            delay: 3000,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner1} className="max-w-sm rounded-lg " />
                <div className="max-w-xl">
                  <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                    Empower Your Child's Future with Live Coding and Robotics
                    Classes.
                  </h1>
                  <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                    Unlock your child's creativity with hands-on, interactive
                    classes in coding and robotics, specially designed for young
                    learners.
                  </p>
                  <Button text="Join Today" link="#" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner2} className="max-w-sm rounded-lg " />
                <div className="max-w-xl">
                  <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                    Interactive Learning
                  </h1>
                  <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                    Our courses are hands-on and interactive, ensuring that
                    students not only learn theory but also apply their
                    knowledge through real-world projects and fun challenges.
                  </p>
                  <Button text="Join Today" link="#" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner3} className="max-w-sm rounded-lg " />
                <div className="max-w-xl">
                  <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                    Expert Instructors
                  </h1>
                  <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                    Our highly qualified instructors specialize in coding and
                    robotics for young learners, offering personalized guidance
                    and mentorship throughout the learning journey.
                  </p>
                  <Button text="Join Today" link="#" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner4} className="max-w-sm rounded-lg " />
                <div className="max-w-xl">
                  <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                    Flexible Online Courses
                  </h1>
                  <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                    Learn at your own pace from the comfort of your home with
                    flexible class schedules that fit around your child busy
                    life.
                  </p>
                  <Button text="Join Today" link="#" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero bg-[#1313130D] mb-20 h-[550px] lg:h-[650px] rounded-3xl">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner5} className="max-w-sm rounded-lg " />
                <div className="max-w-xl">
                  <h1 className="md:text-2xl mb-2 lg:text-5xl playfair-display font-bold text-[#000000] lg:leading-[60px] lg:mb-10">
                    Project-Based Learning
                  </h1>
                  <p className="font-medium mb-5 lg:text-xl text-[#2e2e2e]">
                    Each course is designed around practical projects that
                    inspire creativity and innovation, from building games to
                    programming robots.
                  </p>
                  <Button text="Join Today" link="#" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}

export default Banner
