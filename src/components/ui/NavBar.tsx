// import logo from "/logo/brand.svg";
import { IconButton } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import type { DrawerRefType } from "../wrapper/Drawer";
import Drawer from "../wrapper/Drawer";
import MagicScrollWrapper from "../animated/MagicScrollWrapper";
import XSpacing from "../wrapper/XSpacing";
import clsx from "clsx";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Logo from "./Logo";

const NavBar = () => {
  const drawerEl = useRef<DrawerRefType>(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 400);
  });

  useEffect(() => {
    controls.start({
      y: scrolled ? 0 : -100,
      opacity: scrolled ? 1 : 0,
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  return (
    <MagicScrollWrapper>
      <nav
        className={clsx(
          " navbar w-full lg:py-4  items-center relative  justify-center flex   text-mw-sm overflow-hidden h-full"
        )}
      >
        <motion.div
          animate={controls}
          className="w-full  absolute inset-0 top-0 left-0 bg-black/80 backdrop-blur-[1px] z-1"
        />
        <XSpacing>
          <div className="flex items-center justify-between w-full relative z-2 rounded-md  ">
            {/* Mobile logo */}
            <div className="lg:hidden flex h-[72px] w-[200px] items-center justify-center min-w-fit">
              {/* <img
                src={logo}
                alt="logo"
                height={32}
                width={170}
                className="object-contain object-center"
              /> */}
              <Logo />
            </div>
            {/* Right section with Drawer/Menu */}
            <div className="w-fit lg:w-full h-">
              <Drawer
                ref={drawerEl}
                muiDrawerProps={{
                  anchor: "right",
                  disableScrollLock: true,
                }}
                menu={
                  <IconButton
                    className=" text-[clamp(20px,4vw,28px)] "
                    sx={{ p: 2 }}
                    onClick={() => drawerEl?.current?.open?.()}
                  >
                    <HiOutlineBars3 className=" text-mw-beige hover:text-mw-green-light" />
                  </IconButton>
                }
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full  lg:mt-0 space-y-6 lg:space-y-0 ">
                  {/* Desktop Logo */}
                  <div className="hidden lg:flex h-[72px] w-[200px] items-center justify-center min-w-fit">
                    <Logo />
                  </div>

                  {/* Nav Links */}
                  <div className="flex flex-col lg:flex-row items-center justify-center flex-1 space-y-6 lg:space-y-0 lg:space-x-8">
                    {["About Us", "Projects", "Services", "Contact"].map(
                      (label, i) => {
                        return (
                          <button
                            type="button"
                            key={i}
                            className=" hover:text-mw-green-light text-center text-white font-normal text-mw-text-md"
                          >
                            {label}
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Icons */}
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="flex font-bold text-sm lg:text-base bg-mw-green-light text-white px-6 py-2 rounded-full cursor-pointer border-2 border-transparent transition duration-200  hover:text-mw-green-light hover:border-white hover:bg-white">
                      Let’s talk
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </XSpacing>
      </nav>
    </MagicScrollWrapper>
  );
};

export default NavBar;
