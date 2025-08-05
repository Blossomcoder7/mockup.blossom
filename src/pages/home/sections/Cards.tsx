import XSpacing from "../../../components/wrapper/XSpacing";
import BlueHole from "/assets/models/StarHolo.png";
import mw from "/assets/images/white-favicon.png";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type RefObject,
} from "react";
import { DraggableRotation } from "../../../components/animated/DraggableRotation";

const Cards = () => {
  const { scrollYProgress } = useScroll({});
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);

  const cards1 = [
    {
      id: 1,
      value: "170+",
      title: "Brands rewired",
      description: "Strategy-first transformations that go deeper than logos.",
    },
    {
      id: 2,
      value: "9.4M+",
      title: "Consumer decisions influenced",
      description: "Across packaging, digital, and retail touch points.",
    },
    {
      id: 3,
      value: "80%",
      title: "Clients who returned within 6 months",
      description: "The other 20% are probably still watching us.",
    },
  ];

  const cards2 = [
    {
      id: 4,
      value: "8+",
      title: "Years of brand surgery",
      description: "Brands came in broken. They left reborn.",
    },
    {
      id: 5,
      value: "23",
      title: "Industries navigated",
      description:
        "From biotech to baby bottles. If it moves, we've shaped it.",
    },
    {
      id: 6,
      value: "40+",
      title: "Countries reached",
      description:
        "No translation needed. Emotion, structure, memory – always understood.",
    },
  ];

  const cellElms = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);
  const [overlayStyle, setOverlayStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredIndex === null) return;

    const cell = cellElms.current[hoveredIndex];
    const grid = gridRef.current;
    if (cell && grid) {
      const gridRect = grid.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();

      setOverlayStyle({
        top: cellRect.top - gridRect.top,
        left: cellRect.left - gridRect.left,
        width: cellRect.width,
        height: cellRect.height,
      });
    }
  }, [hoveredIndex]);
  
  return (
    <div className=" bg-mw-beige py-14 flex w-full overflow-hidden flex-col relative">
      {/* Top Section */}
      <XSpacing className="gap-3">
        <div
          ref={gridRef}
          className="grid grid-cols-1 w-full h-fit gap-3 relative"
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  top: overlayStyle.top,
                  left: overlayStyle.left,
                  width: overlayStyle.width,
                  height: overlayStyle.height,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="pointer-events-none absolute top-0 left-0 rounded-xl bg-mw-green-dark z-1"
                style={{}}
              >
                <div className="w-ful h-full flex items-center justify-center">
                  <img
                    src={mw}
                    alt="bg"
                    className="object-contain w-full h-full opacity-4 px-1"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-3 w-full ">
            {cards1.map((item, index) => (
              <Fragment key={index}>
                <CardItem
                  description={item.description}
                  title={item.title}
                  value={item.value}
                  ref={cellElms}
                  index={item.id}
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex((p) => (p ? p : 1))}
                  activeIndex={hoveredIndex}
                />
              </Fragment>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="col-span-1 relative w-full h-fit ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
              {cards2.map((item, index) => (
                <Fragment key={index}>
                  <CardItem
                    description={item.description}
                    activeIndex={hoveredIndex}
                    title={item.title}
                    value={item.value}
                    ref={cellElms}
                    index={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex((p) => (p ? p : 1))}
                  />
                </Fragment>
              ))}
              {/* BlueHole Image */}
              <div className="hidden lg:flex items-end justify-end relative">
                <div className="absolute -bottom-20 right-0 z-1">
                  <motion.div
                    style={{
                      rotate,
                    }}
                    className=" flex w-full h-full justify-center items-center relative z-2"
                  >
                    <DraggableRotation sensitivity={1}>
                      <img
                        src={BlueHole}
                        alt="BlueHole"
                        className="h-[200px] lg:h-[298px] w-[200px] lg:w-[298px] object-contain"
                      />
                    </DraggableRotation>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </XSpacing>
    </div>
  );
};

interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  title: string;
  description: string;
  ref: RefObject<(HTMLDivElement | null)[]>;
  index: number;
  activeIndex: number;
}
const CardItem = ({
  value,
  title,
  description,
  className,
  ref,
  index,
  activeIndex,
  ...rest
}: CardItemProps) => {
  const isActive = index === activeIndex;
  
  return (
    <div
      ref={(el) => {
        ref.current[index] = el;
      }}
      {...rest}
      className={clsx(
        "group cursor-pointer bg-white rounded-xl p-6  flex flex-col justify-between min-h-[220px] transition-all duration-300 relative overflow-hidden",
        className
      )}
    >
      <div className="relative z-2">
        <h1
          className={clsx(
            "text-[48px] md:text-[64px] lg:text-[90px] font-semibold text-[#053333] transition-colors duration-300  leading-tight",
            isActive && "text-mw-green-light"
          )}
        >
          {value}
        </h1>
        <p
          className={clsx(
            "text-xl md:text-2xl mt-1 text-[#053333] transition-colors duration-300  leading-snug",
            isActive && "text-mw-green-light"
          )}
        >
          {title}
        </p>
      </div>
      <p
        className={clsx(
          "text-sm mt-4 text-[#053333]/80 transition-colors duration-300  relative z-10",
          isActive && "text-mw-green-light"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default Cards;
