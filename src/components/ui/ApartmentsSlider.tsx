"use client";

import React, { useEffect } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AccommodationCard from './AccommodationCard';
import { usePropertyStore } from '@/stores/PropertyStore';
import AccommodationCardSkeleton from '../skeletons/AccommodationCardSkeleton';

const ApartmentSlider = () => {
    const {
        sliderApartments,
        fetchSliderApartments,
    } = usePropertyStore();

    useEffect(() => {
        if (sliderApartments.length === 0) {
            fetchSliderApartments();
        }
    }, [fetchSliderApartments, sliderApartments.length]);

    const isLoading = sliderApartments.length === 0;

    return (
        <section className='md:mt-8 mt-6'>
                <div className="bg-[#EFEFEF] lg:py-16 md:py-12 py-10">
            <div className="container">
                {/* Header */}
                <div className="flex md:justify-between md:items-end flex-col md:flex-row gap-6.5">
                    <div>
                        <div className="heading-h1 text-[#121212] leading-[120%] my-2">Suggested Apartments</div>
                        <div className="text-[#666D80] font-medium">
                            The best apartments which are listed here for our best service.
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:justify-center md:mt-8 mt-1">
                        <button
                            className="magazine-prev hover:text-white hover:bg-black transition-all duration-300 rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer bg-white"
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            className="magazine-next text-white bg-black rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer"
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className='md:mt-12 mt-8 relative'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={12}
                        slidesPerView={1.2}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },   // base mobile
                            768: { slidesPerView: 2 },     // md
                            1024: { slidesPerView: 3 },    // lg
                            1280: { slidesPerView: 4 },    // xl 👈 for 1280px+
                            1440: { slidesPerView: 4 },    // optional for ultra-wide
                        }}
                        navigation={{
                            prevEl: '.magazine-prev',
                            nextEl: '.magazine-next',
                        }}
                    >
                        {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <SwiperSlide key={i}>
                      <AccommodationCardSkeleton />
                    </SwiperSlide>
                  ))
                : sliderApartments.map((item, i) => (
                    <SwiperSlide key={i}>
                      <AccommodationCard
                        title={item.name}
                        area={item.surface}
                        persons={item.adults}
                        location={item.station}
                        bedrooms={item.rooms}
                        price={item.winterPrice}
                        images={item.allImages.slice(0, 7)}
                        id={item.propertyId}
                        link={`/apartments/${item.propertyId}`}
                      />
                    </SwiperSlide>
                  ))}
                    </Swiper>


                </div>
            </div>
        </div>
        </section>
    );
};

export default ApartmentSlider;
