import BannerSection from "../sections/BannerSection";
import BrandSlide from "../sections/BrandSlide";
import Cards from "../sections/Cards";
import FromCEO from "../sections/FromCEO";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import SliderSection from "../sections/SliderSection";

const Index = () => {
  return (
    <div className="flex flex-col w-full h-auto min-h-fit sm:text-white bg-mw-black">
      <BannerSection />
      <SliderSection />
      <BrandSlide />
      <Section4 />
      <Cards />
      <Section5 />
      <FromCEO />
    </div>
  );
};

export default Index;
