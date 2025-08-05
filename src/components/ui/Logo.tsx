import clsx from "clsx";
import type React from "react";
import { type HTMLAttributes } from "react";
import CircleElement from "./CircleElement";
import Blossom from "./Blossom";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-full max-h-full h-full flex items-center justify-center",
        className
      )}
    >
      <div className="flex w-full h-full gap-2.5 flex-nowrap  items-center justify-center p-2 relative">
        <Blossom className="max-w-[150px] max-h-[62px]" />
        <>
            <CircleElement className="max-w-fit"><span className="text-[10px]">Coder</span></CircleElement>
        </>
      </div>
    </div>
  );
};

export default Logo;
