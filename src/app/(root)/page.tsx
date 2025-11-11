import ExperiencesSlider from "@/components/ui/ExperiencesSlider";
import HeroFilter from "@/components/ui/HeroFilter";
import HomeListing from "@/components/ui/HomeListing";
import HomeTestimonials from "@/components/ui/HomeTestimonials";
import MagazineListing from "@/components/ui/MagazineListing";
import WhyChoose from "@/components/ui/WhyChoose";
import { GoArrowUpRight } from "react-icons/go";


export default function Home() {
  return (
    <>
      <section >
        <div
          className="container-padding relative w-full h-[690px] md:h-[710px] lg:h-[750px] xl:h-[848px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.webp')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* Content */}
          <div className="sm:px-0 px-4 xl:mt-[-84px] lg:mt-[-75px] mt-[-126px] lg:gap-4 gap-3 flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div
              className="text-white text-center font-normal leading-[140%] text-[16px] md:text-[18px] mb-3 md:mb-6 lg:mb-10 xl:mb-14"
              style={{
                letterSpacing: '-0.36px',
              }}
            >
              Dream Holiday in the
            </div>

            <div
              className="heading-stroke text-white leading-[100%] uppercase font-normal not-italic"
              style={{
                WebkitTextStrokeWidth: '4px',
                WebkitTextStrokeColor: '#FFF',
                fontWeight: 400,
                letterSpacing: '-1.6px',
              }}
            >
              <span className="text-[48px] md:text-[80px] lg:text-[120px] xl:text-[160px]">
                FRENCH ALPS
              </span>


            </div>

            <div
              className="text-white text-center font-normal leading-[140%] font-medium"
              style={{
                letterSpacing: '-0.36px',
                textShadow: '0px 4px 31.6px #000',
              }}
            >
              Discover the finest selection of accommodation, transport and addresses
              <br className="hidden sm:block" />
              in your winter paradise and save time to make the most of your holiday
            </div>


            {/* <div className="w-full flex justify-center mt-4">
              <button className="flex items-center justify-center gap-2 bg-white rounded-[9999px] px-[24px] py-[12px] font-medium font-[700] cursor-pointer w-full sm:w-auto">Start Planning <GoArrowUpRight /></button>
            </div> */}
          </div>

          <HeroFilter />
        </div>
      </section>




      <section>
        <div className="bg-[#EFEFEF] lg:py-[90px] py-[40px] md:py-[60px]">
          <div className="container">
            <ExperiencesSlider />
          </div>
        </div>
      </section>

      <section className="lg:my-[80px] md:my-[60px] my-[40px]">
        <HomeListing />
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <HomeTestimonials />
      </section>

      <section>
        <MagazineListing />
      </section>
    </>
  );
}
