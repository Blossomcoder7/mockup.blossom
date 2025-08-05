import { motion, useScroll, useTransform } from "motion/react";
import XSpacing from "../../../components/wrapper/XSpacing";
import ball2 from "/assets/models/BlueHolo.png";
import ball1 from "/assets/models/LockedRings.png";
import { DraggableRotation } from "../../../components/animated/DraggableRotation";

const Section4 = () => {
  const { scrollYProgress } = useScroll({});
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);

  return (
    <div className="flex w-full h-full items-center justify-center overflow-hidden min-h-fit relative bg-mw-beige">
      <XSpacing>
        <div className="flex relative flex-col w-full py-20 gap-20 ">
          <div className=" pointer-events-none selection:bg-transparent w-full flex items-center justify-start ">
            <p className="text-h1-m  relative z-3 md:text-[65px]  md:leading-none text-mw-green-dark font-semibold">
              Everyone designs. We shape how <br /> people{" "}
              <span className="text-mw-green-light">feel your brand.</span>{" "}
            </p>
          </div>
          <div className="w-full flex justify-end items-center min-h-fit h-auto">
            <div className="   flex flex-col max-w-10/12 gap-4">
              <p className="w-full  relative z-3 text-mw-black font-normal text-h2-m indent-32">
                We’re a 22-person team specialized in branding, packaging and
                identity systems. We’ve worked on projects from boutique
                founders to global product brands.{" "}
              </p>
              <p className="w-full  relative z-3 text-mw-black font-normal text-h2-m indent-32">
                What we’ve built over the years is not just a portfolio it’s a
                culture. One that has shaped standards and inspired new
                directions in our industry.
              </p>
            </div>
          </div>

          <div className="absolute  z-1 -right-[10%]  top-10 ">
            <motion.div
              style={{
                rotate,
              }}
              className="w-full h-full flex items-center justify-center relative z-1"
            >
              <DraggableRotation sensitivity={1.2}>
                <img
                  src={ball1}
                  alt="ball1"
                  className="md:h-56 h-40 w-fit object-contain"
                />
              </DraggableRotation>
            </motion.div>
          </div>
          <div className="absolute  -left-[10%] bottom-10 md:bottom-6 z-1 ">
            <motion.div
              style={{
                rotate: rotate,
              }}
              className="w-full h-full flex items-center justify-center relative z-2"
            >
              <DraggableRotation sensitivity={1}>
                <img
                  src={ball2}
                  alt="ball2"
                  className="md:h-56 h-40 w-fit object-contain"
                />
              </DraggableRotation>
            </motion.div>
          </div>
        </div>
      </XSpacing>
    </div>
  );
};

export default Section4;
