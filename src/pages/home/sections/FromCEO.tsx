import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import start from "/assets/images/Stat.png";
import ceo from "/assets/images/ceo.png";
import XSpacing from "../../../components/wrapper/XSpacing";
import AnimatedText from "../../../components/animated/AnimatedText";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
// import Character from "../../../components/animated/Character";

const FromCEO = () => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const sectionEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sectionEl?.current;
    if (!el) {
      return;
    }
    const handleHeight = () => {
      const maxHeight = el.clientHeight;
      setMaxHeight(maxHeight);
    };
    requestAnimationFrame(handleHeight);
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, [sectionEl]);
  // const animatedWords = [
  //   "rebrand",
  //   "clarity",
  //   "brand",
  //   "strategic",
  //   "visual",
  //   "seamless",
  //   "Markaworks",
  // ];

  return (
    <div className="w-full bg-mw-beige h-full">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          ease: "easeIn",
          duration: 0.7,
        }}
        className="w-full  py-14 "
      >
        <XSpacing>
          <div className=" grid grid-cols-1 lg:grid-cols-5   gap-10">
            <div
              ref={sectionEl}
              className=" col-span-full lg:col-span-3 min-h-fit h-full flex flex-col justify-between "
            >
              {/* Testimonial */}
              <div className="flex flex-col w-full h-fit space-y-8">
                {/* <p className="flex flex-row flex-wrap gap-x-2">
                {`The rebrand from Markaworks gave us the clarity we didn’t know we were missing. We came in with a product and left with a brand that actually speaks. Their strategic process, visual system, and rollout support was seamless.`
                  ?.split(" ")
                  .map((a, i) => {
                    // if (animatedWords.includes(a)) {
                    //   return (
                    //     <span className="px-1 flex flex-row flex-wrap gap-0">
                    //       {a.split("").map((b, idx) => (
                    //         <Character
                    //           className="text-mw-green-dark text-lg md:text-h3-m leading-normal tracking-tight "
                    //           key={idx}
                    //           index={idx}
                    //         >
                    //           {b}
                    //         </Character>
                    //       ))}
                    //     </span>
                    //   );
                    // }
                    return (
                      <span
                        key={i}
                        className="text-mw-green-dark text-lg md:text-h3-m leading-relaxed tracking-tight "
                      >
                        {a}
                      </span>
                    );
                  })}
              </p> */}

                <p className="text-mw-green-dark  text-h2-m leading-normal tracking-tight">
                  The rebrand from Markaworks gave us the clarity we didn’t know
                  we were missing. We came in with a product and left with a
                  brand that actually speaks. Their strategic process, visual
                  system, and rollout support was seamless.
                </p>

                <div className="grid grid-cols-3 md:grid-cols-3 gap-6 ">
                  <div>
                    <p className="text-mw-violet text-h1-m font-semibold">4x</p>
                    <p className="text-mw-green-dark text-md">
                      brand consistency
                      <br />
                      across platforms
                    </p>
                  </div>
                  <div>
                    <p className="text-mw-green-light text-h1-m font-semibold">
                      60%
                    </p>
                    <p className="text-mw-green-dark text-md">
                      less confusion
                      <br />
                      in user onboarding
                    </p>
                  </div>
                  <div>
                    <p className="text-mw-blue text-h1-m font-semibold">
                      +1.2k
                    </p>
                    <p className="text-mw-green-dark text-md">
                      new patients
                      <br />
                      in first 3 months
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-15 ">
                <div className="flex items-center gap-4">
                  <img
                    src={ceo}
                    alt="ceo"
                    className="h-24 w-24 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="text-mw-green-dark text-lg font-semibold">
                      Julia Smith
                    </p>
                    <p className="text-md text-black/40">
                      <AnimatedText color="#B8D432">
                        Founder & CEO, Better
                      </AnimatedText>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full bg-white shadow text-mw-green-dark hover:bg-mw-green-light hover:cursor-pointer">
                    <FaArrowLeft />
                  </button>
                  <button className="p-3 rounded-full bg-white shadow text-mw-green-dark hover:bg-mw-green-light hover:cursor-pointer">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div
              style={{
                maxHeight: `${maxHeight}px`,
              }}
              className="-order-1 md:order-1  col-span-full h-full w-full  lg:col-span-2 flex items-center justify-center "
            >
              <img
                src={start}
                alt="Brand Visual"
                className="w-full h-full  rounded-xl object-cover "
              />
            </div>
          </div>
        </XSpacing>
      </motion.div>
    </div>
  );
};

export default FromCEO;
