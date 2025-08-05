import clsx from "clsx";
import { motion } from "framer-motion";
import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import useFollowMouseLocation from "../../hooks/animated/useFollowMouseLocation";

interface AnimatedButtonProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
}
const AnimatedButton = ({
  children,
  className,

  ...rest
}: AnimatedButtonProps) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const ballEl = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);
  const { springX, springY } = useFollowMouseLocation({
    container: containerEl,
    ref: ballEl,
  });

  return (
    <motion.div
      ref={containerEl}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "relative inline-flex w-full h-full  items-center justify-center overflow-hidden font-bold text-sm lg:text-base  px-6 py-2.5 rounded-full cursor-pointer  bg-mw-green-light ",
        className
      )}
      {...rest}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          opacity: hovered ? 1 : 0,
        }}
        className="h-[200%] aspect-square rounded-full bg-white absolute z-2 pointer-events-none top-0 left-0"
      ></motion.div>
      <span
        className={`relative z-2 transition-colors duration-300 text-mw-green-dark`}
      >
        {children}
      </span>
    </motion.div>
  );
};

export default AnimatedButton;
