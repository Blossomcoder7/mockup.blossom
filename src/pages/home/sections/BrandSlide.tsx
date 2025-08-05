import Placeholder1 from "/assets/icons/Placeholder1.png";
import Placeholder2 from "/assets/icons/Placeholder2.png";
import "../../../style/Slide.css";

const BrandSlide = () => {
  const repeatCount = 50;

  const Placeholder = [
    { id: 1, image: Placeholder1 },
    { id: 2, image: Placeholder2 },
  ];

  return (
    <>
      <div className="bg-mw-beige py-4 flex flex-col justify-center items-center">
        <p className="text-center text-mw-green-dark  font-semibold text-lg mb-4 mt-3">
          Trusted by 500+ of the world’s top brands
        </p>
        {/* part one - left to right */}
        <div className="flex flex-col w-full min-h-fit relative max-w-[200rem] overflow-hidden">
          {/* Left Gradient Overlay */}
          <div className="hidden 5xl:block absolute inset-y-0 left-0 w-1/3 pointer-events-none z-10">
            <div className="h-full w-full bg-gradient-to-r from-mw-beige via-mw-beige/70 to-mw-beige/0" />
          </div>

          {/* Right Gradient Overlay */}
          <div className="hidden 5xl:block absolute inset-y-0 right-0 w-1/3 pointer-events-none z-10">
            <div className="h-full w-full bg-gradient-to-l from-mw-beige via-mw-beige/70 to-mw-beige/0" />
          </div>
          <div className="mx-auto max-w-[2300px] relative z-1 overflow-hidden py-2">
            <div className="whitespace-nowrap slide-left flex gap-10 animate-marquee text-lg font-semibold text-[#053333] tracking-wider">
              {Array.from({ length: repeatCount }).flatMap((_, i) =>
                Placeholder.map((item, idx) => (
                  <img
                    key={`top-${i}-${idx}`}
                    src={item.image}
                    alt={`brand-${item.id}`}
                    className="h-22 w-auto object-contain aspect-3/2"
                  />
                ))
              )}
            </div>
          </div>

          {/* part two - right to left */}
          <div className="mx-auto max-w-[2300px] relative z-1 overflow-hidden py-2">
            <div className="whitespace-nowrap slide-right flex gap-10 animate-marquee1 text-lg justify-end font-semibold text-[#053333] tracking-wider">
              {Array.from({ length: repeatCount }).flatMap((_, i) =>
                [...Placeholder]
                  .reverse()
                  .map((item, idx) => (
                    <img
                      key={`bottom-${i}-${idx}`}
                      src={item.image}
                      alt={`brand-${item.id}`}
                      className="h-22 w-auto object-contain aspect-3/2"
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSlide;
