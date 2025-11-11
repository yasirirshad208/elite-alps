"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RestaurantCard from "./RestaurantCard";
import { useExperienceStore } from "@/stores/ExperienceStore";
import RestaurantCardSkeleton from "@/components/skeletons/RetaurantCardSkeleton";

const ExperiencSlider = ({
  heading,
  showSubheading = true,
}: {
  heading?: string;
  showSubheading?: boolean;
}) => {
  const { restaurants, fetchRestaurants } = useExperienceStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchRestaurants();
      setLoading(false);
    };

    if (restaurants.length === 0) {
      load();
    } else {
      setLoading(false);
    }
  }, [fetchRestaurants, restaurants.length]);

  return (
    <div className="bg-[#EFEFEF] lg:py-16 md:py-12 py-10">
      <div className="container">
        {/* Header */}
        <div
          className={`flex md:justify-between md:items-end flex-col md:flex-row ${
            showSubheading ? "gap-6.5" : "md:gap-6.5 gap-4"
          }`}
        >
          <div>
            <div className="heading-h1 text-[#121212] leading-[120%] my-2">
              {heading}
            </div>
            {showSubheading && (
              <div className="text-[#666D80] font-medium">
                The best restaurants which are listed here for our best service.
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 md:justify-center md:mt-8 mt-1">
            <button className="magazine-prev hover:text-white hover:bg-black transition-all duration-300 rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer bg-white">
              <FaArrowLeftLong />
            </button>
            <button className="magazine-next text-white bg-black rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer">
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="md:mt-12 mt-8 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1.2 }, // base mobile
              768: { slidesPerView: 2 }, // md
              1024: { slidesPerView: 3 }, // lg
              1280: { slidesPerView: 4 }, // xl
              1440: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".magazine-prev",
              nextEl: ".magazine-next",
            }}
          >
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <SwiperSlide key={i}>
                    <RestaurantCardSkeleton />
                  </SwiperSlide>
                ))
              : restaurants.map((item) => (
                  <SwiperSlide key={item._id}>
                    <RestaurantCard
                      cardUrl={`/restaurants/${item.slug}`}
                      title={item.name}
                      restaurantType={item.price}
                      image={item.images}
                      showLocation={true}
                      location={item.location}
                      cuisine={item.cuisine}
                      rating={item.avgRating}
                      totalReviews={item.totalReviews}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ExperiencSlider;
