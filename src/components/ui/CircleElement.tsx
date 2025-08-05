import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import "./Circle.css";
import clsx from "clsx";

const CircleElement = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerSize = Math.min(
        container.clientWidth,
        container.clientHeight
      );
      setSize(containerSize);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const svgSize = size ? size * 1.1 : 0;

  return (
    <div
      ref={containerRef}
      className={clsx(
        "cursor-pointer w-full h-full relative flex items-center justify-center rounded-full aspect-square  ",
        className
      )}
    >
      {size > 0 && (
        <>
          <div
            className={clsx(
              "rounded-full w-full h-full  flex items-center justify-center aspect-square relative z-10 ",
              size > 100 ? "p-4" : "p-2.5"
            )}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <div className=" w-full h-full min-w-fit text-md font-bold font-mono bg-[#007bff] rounded-full  flex items-center justify-center aspect-square relative z-3 p-1">
              {children}
            </div>
          </div>

          <svg
            className="absolute z-1"
            viewBox="0 0 200 200"
            width={svgSize}
            height={svgSize}
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100
                   m -75, 0
                   a 75,75 0 1,1 150,0
                   a 75,75 0 1,1 -150,0"
              />
            </defs>
            <g className="rotating-text">
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  &lt;div&gt; function() &#123;&#125; let x=10; return true;
                  &lt;/div&gt;{`()=>{return true}`}
                </textPath>
              </text>
            </g>
          </svg>
        </>
      )}
    </div>
  );
};

export default CircleElement;
