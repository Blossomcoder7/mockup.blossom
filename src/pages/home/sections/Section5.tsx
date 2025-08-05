import { FaArrowRight } from "react-icons/fa";
import image1 from "/assets/images/image-1.png";
import image2 from "/assets/images/image-2.png";
import image3 from "/assets/images/image-3.png";
import image4 from "/assets/images/image-4.png";
import image5 from "/assets/images/image-5.png";
import image6 from "/assets/images/image-6.png";
import XSpacing from "../../../components/wrapper/XSpacing";
import { useRef, useState, type SetStateAction } from "react";
import useFollowMouseLocation from "../../../hooks/animated/useFollowMouseLocation";
import { motion } from "motion/react";
import Character from "../../../components/animated/Character";
import bottle from "/assets/models/bottle.png"

interface Cards {
  id: number;
  image: string;
  name: string;
  tags: string[];
}
const Section5 = () => {
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
  const cards: Cards[] = [
    {
      id: 1,
      image: image1,
      name: "Freya",
      tags: ["Branding", "3D", "Packaging"],
    },
    {
      id: 2,
      image: image2,
      name: "Pheros",
      tags: ["Branding", "3D", "Packaging"],
    },
    {
      id: 3,
      image: image3,
      name: "Karia",
      tags: ["Branding", "3D", "Packaging", "Web Design"],
    },
    {
      id: 4,
      image: image4,
      name: "Evernate",
      tags: ["Branding", "3D", "Packaging", "Web Design"],
    },
    {
      id: 5,
      image: image5,
      name: "ResetCare",
      tags: ["Branding", "3D", "Web Design"],
    },
    {
      id: 6,
      image: image6,
      name: "Better",
      tags: ["Branding", "3D", "Web Design"],
    },
  ];

  return (
    <div className="bg-mw-green-dark w-full min-h-fit h-auto">
      <XSpacing>
        <div className="w-full flex flex-col md:flex-row justify-between  items-start md:items-center py-10 gap-6 ">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
            We build brands that stick <br />
            <span className="text-[#94CDD9]">strategically,</span>{" "}
            <span className="text-mw-grenbg-mw-green-light">visually,</span>{" "}
            <span className="text-[#BFB1D7]">emotionally.</span>
            <div className="py-4">
              <div className="flex items-center gap-2 text-mw-grenbg-mw-green-light font-bold border border-mw-grenbg-mw-green-light w-fit px-4 py-2 rounded-full hover:cursor-pointer text-sm sm:text-base hover:bg-mw-green-light hover:text-mw-green-dark transition">
                View all <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-16">
          <div ref={containerEl} className="relative flex flex-col gap-4">
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
            >
              <div className="bg-mw-green-light h-[80px] w-[80px] rounded-full font-bold text-mw-green-dark">
                <div className="w-full h-full flex justify-center items-center text-mw-text-md">
                  View
                </div>
              </div>
            </motion.div>

            {/* First Row - lg: 30% 30% 40% | md: 50% 50% | sm: 100% */}
            <div className="flex flex-col sm:flex-col md:flex-row flex-wrap lg:flex-row ">
              <div className="w-full md:w-[50%] mx-auto lg:w-[30%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[0]} />
              </div>
              <div className="w-full md:w-[50%] mx-auto lg:w-[30%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[1]} />
              </div>
              <div className="w-full md:w-full lg:w-[40%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[2]} />
              </div>
              <div className="w-full md:w-full lg:w-[40%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[3]} />
              </div>
              <div className="w-full md:w-[50%] mx-auto lg:w-[30%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[4]} />
              </div>
              <div className="w-full md:w-[50%] mx-auto lg:w-[30%] p-1.5 flex items-center justify-center">
                <Card setShow={setShow} card={cards[5]} />
              </div>
            </div>
          </div>
        </div>
      </XSpacing>
    </div>
  );
};

export default Section5;

const Card = ({
  card,
  setShow,
}: {
  card: Cards;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [show, setShow2] = useState<boolean>(false);
  return (
    <>
      <div
        onMouseEnter={() => {
          setShow(true);
          setShow2(true);
        }}
        onMouseLeave={() => {
          setShow(false);
          setShow2(false);
        }}
        key={card.id}
        className="flex w-full cursor-pointer group relative z-1 transition-all duration-200 ease-in flex-col gap-3"
      >
        <div className="rounded-xl z-2 relative overflow-hidden shadow-lg w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex justify-center items-center">
          <img
            src={card.image}
            alt={card.name}
            className="w-full group-hover:scale-110 transition-all duration-200 relative z-2 ease-in h-full object-cover"
          />
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
            transition={{
              type: "spring",
              duration: 5,
              stiffness: 120,
              damping: 20,
            }}
            className="w-full absolute top-0 left-0 inset-0 h-full z-2  flex items-center 5 justify-center"
          >
            <div className="absolute hidden items-center justify-center w-full h-full inset-0 z-2">
                <img src={bottle} alt="object" className="object-contain w-8/12 h-8/12" />
            </div>
            <motion.p className=" flex flex-row flex-nowrap gap-1 text-mw-beige font-semibold uppercase z-1  text-[clamp(70px,5vw,90px)] ">
              {card.name.split("").map((a, i) => (
                <Character index={card.id} key={i}>
                  {a}
                </Character>
              ))}
            </motion.p>
          </motion.div>
        </div>
        <h3 className="text-mw-beige z-2 relative  group-hover:text-mw-green-light text-lg font-semibold">
          {card.name}
        </h3>
        <div className="flex flex-wrap z-2 relative gap-2">
          {card.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-mw-beige group-hover:text-mw-green-light  border border-mw-text-mw-beige text-xs px-3 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
