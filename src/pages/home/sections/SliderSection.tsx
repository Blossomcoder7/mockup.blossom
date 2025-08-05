import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Typewriter from "typewriter-effect";
import image from "/assets/images/image.png";
import image1 from "/assets/images/image1.png";
import image2 from "/assets/images/image2.png";
import image3 from "/assets/images/image3.png";
import image4 from "/assets/images/image4.png";
import "swiper/swiper-bundle.css";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import useFollowMouseLocation from "../../../hooks/animated/useFollowMouseLocation";
import XSpacing from "../../../components/wrapper/XSpacing";
import AnimatedText from "../../../components/animated/AnimatedText";
interface Slide {
  id: number;
  image: string;
  title: string;
}
const SliderSection = () => {
  const cardData: Slide[] = [
    { id: 1, image: image, title: "Lorem ipsum" },
    { id: 2, image: image2, title: "Lorem ipsum" },
    { id: 3, image: image3, title: "Lorem ipsum" },
    { id: 4, image: image4, title: "Lorem ipsum" },
    { id: 5, image: image1, title: "Lorem ipsum" },
    { id: 6, image: image3, title: "Lorem ipsum" },
    { id: 7, image: image4, title: "Lorem ipsum" },
    { id: 8, image: image3, title: "Lorem ipsum" },
  ];

  return (
    <>
      <div className="w-full bg-[#053333] py-5">
        <XSpacing>
          <div className="w-full flex flex-col md:flex-row justify-between items-start mt-6 gap-6">
            <div className="w-full md:w-[70%]">
              <p className="text-white text-h2-m font-semibold">
                <Typewriter
                  component={"span"}
                  options={{
                    autoStart: true,
                    cursor: "|",
                    cursorClassName: "text-mw-green-light",
                    loop: true,
                    strings: [
                      "Hello",
                      "Markaworks",
                      "Creativity",
                      "Imprecation",
                      "Memory",
                    ],
                  }}
                ></Typewriter>
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-2">
                First <span className="text-mw-blue">imprecation</span> Wins.
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                We Build what <span className="text-mw-violet">memory</span>{" "}
                pins
              </p>
            </div>

            <div className="w-full md:w-[30%] flex flex-col justify-between gap-4">
              <p className="">
                <AnimatedText   disabled={false} color="#B8D432" className="text-white/60 text-mw-text-md md:text-mw-text-lg">
                  Aesthetics are easy. Designs that trigger emotion, shift
                  behavior, and convert are rare.
                </AnimatedText>
              </p>

              <div
                className="w-fit bg-[#B8D432] px-6 py-2 rounded-full font-bold text-[#053333] 
      hover:bg-transparent hover:text-[#B8D432] border-2 border-transparent hover:border-[#B8D432] cursor-pointer transition duration-300"
              >
                Let’s build yours
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-full  py-8 overflow-hidden">
            <div className="w-full mx-auto">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                grabCursor={true}
                allowTouchMove={true}
                centeredSlides
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  // reverseDirection: true,
                }}
                speed={4000}
                breakpoints={{
                  320: { slidesPerView: 1.5 },
                  480: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                className="mySwiper"
              >
                {cardData.map((card) => (
                  <SwiperSlide key={card.id}>
                    <SlideComponent card={card}></SlideComponent>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </XSpacing>
      </div>
    </>
  );
};

export default SliderSection;

const SlideComponent = ({ card }: { card: Slide }) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const xBoxEl = useRef<HTMLDivElement>(null);
  const { springX, springY } = useFollowMouseLocation(
    {
      container: containerEl,
      ref: xBoxEl,
      padding: 10,
      shouldIncludePaddingInBounds: true,
      alignment: "left",
      damping: 13,
      stiffness: 130,
    },
    "elm"
  );
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        ref={containerEl}
        className="w-full group relative flex justify-center items-center"
      >
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          animate={{
            opacity: show ? 1 : 0,
          }}
          ref={xBoxEl}
          className="absolute pointer-events-none top-0 left-0 z-2 cursor-pointer hidden sm:flex w-fit h-fit justify-center items-center "
          //   onClick={() => alert("hi")}
        >
          <div className="bg-[#B8D432] h-[80px] w-[80px] rounded-full font-bold text-[#053333]">
            <div className="w-full h-full flex justify-center items-center text-mw-text-md">
              View
            </div>
          </div>
        </motion.div>
        <img
          src={card.image}
          alt="reviewer"
          className=" object-cover rounded-xl shadow-md"
        />
      </div>
    </>
  );
};
