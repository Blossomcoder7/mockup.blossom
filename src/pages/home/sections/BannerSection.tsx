import { useRef } from "react";
import Character from "../../../components/animated/Character";
import { motion, MotionValue, useTransform, useVelocity } from "motion/react";
import useFollowMouseLocation from "../../../hooks/animated/useFollowMouseLocation";
import XSpacing from "../../../components/wrapper/XSpacing";
import bg from "/assets/images/white-favicon.png";
import useScreenSize from "../../../hooks/animated/useScreenSize";
const BannerSection = () => {
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
    "window"
  );

  const { isMobile } = useScreenSize();
  const velocityX = useVelocity(springX);
  const velocityY = useVelocity(springY);

  // Calculate speed based on velocity
  const speed = useTransform(
    [velocityX, velocityY],
    ([vx, vy]: MotionValue<number>[]) => {
      const magnitude = Math.sqrt(
        Number(vx) * Number(vx) + Number(vy) * Number(vy)
      );
      return magnitude;
    }
  );

  const scale = useTransform(speed, [0, 1000], [1, 1.5], {
    clamp: true,
  });
  
  return (
    <>
      <div className="relative cursor-pointer bg-mw-black  w-full h-[clamp(700px,95svh,1200px)] text-white flex justify-center items-center">
        <motion.div className="absolute hidden w-full h-full inset-0">
          <video
            src="https://www.markaworks.com/wp-content/uploads/2020/11/optimize.mp4"
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            className="object-cover w-full h-full"
          ></video>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeIn",
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-full h-full z-2 bg-mw-black/35 inset-0 flex items-start justify-center"
        >
          <img
            src={bg}
            alt="bg"
            className="w-10/12 h-10/12 object-contain opacity-4"
          />
        </motion.div>
        <div
          ref={containerEl}
          className="relative cursor-pointer z-2    w-full h-[calc(100%-80px)] text-white flex justify-center items-center"
        >
          <XSpacing className="h-full w-full">
            <div className="w-full h-full relative z-3">
              <div className="min-w-fit pt-7 absolute top-1/2 left-1/2 -translate-1/2 text-[80px] sm:text-[clamp(80px,9vw,180px)] 3xl:text-[clamp(130px,15vw,250px)] leading-none  font-medium">
                <motion.p
                  initial={{ x: -100 }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeIn",
                    type: "spring",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  className="flex w-full text-end justify-end uppercase items-center gap-0.5 font-medium"
                >
                  {`We`?.split("").map((a, idx) => (
                    <Character
                      className="text-mw-beige  "
                      index={idx}
                      key={`a-${idx}`}
                    >
                      {a}
                    </Character>
                  ))}
                </motion.p>
                <motion.p
                  initial={{ x: -100 }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeIn",
                    type: "spring",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  className="flex w-full text-end justify-end uppercase items-center gap-0.5 font-medium"
                >
                  {`Don't`?.split("").map((a, idx) => (
                    <Character
                      className="text-mw-beige  "
                      index={idx}
                      key={`a-${idx}`}
                    >
                      {a}
                    </Character>
                  ))}
                </motion.p>
                <motion.p
                  initial={{ x: -100 }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeIn",
                    type: "spring",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  className="flex w-full text-end justify-end uppercase items-center gap-0.5 font-medium"
                >
                  {`Follow`?.split("").map((a, idx) => (
                    <Character
                      className="text-mw-beige  "
                      index={idx}
                      key={`a-${idx}`}
                    >
                      {a}
                    </Character>
                  ))}
                </motion.p>
                <motion.p
                  initial={{ x: 0 }}
                  whileInView={{
                    x: isMobile ? 32 : 80,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    delay: 0.5,
                  }}
                  className="flex w-full  text-end justify-end uppercase items-center gap-0.5 font-medium"
                >
                  {`Trends`?.split("").map((a, idx) => (
                    <Character
                      className="text-mw-beige  "
                      index={idx}
                      key={`a-${idx}`}
                    >
                      {a}
                    </Character>
                  ))}
                </motion.p>
              </div>
            </div>
          </XSpacing>
          <motion.div
            style={{
              x: springX,
              y: springY,
              scale: scale,
            }}
            transition={
              {
                // mass: 2,
              }
            }
            ref={xBoxEl}
            className="absolute pointer-events-none top-0 left-0 z-3 cursor-pointer hidden sm:flex w-fit h-fit justify-center items-center "
            //   onClick={() => alert("hi")}
          >
            <div className="bg-mw-green-light h-[130px] w-[130px] rounded-full font-bold text-white">
              <div className="w-full h-full flex justify-center items-center text-base">
                Let’s talk
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
