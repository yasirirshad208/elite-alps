"use client";

import React, { useEffect } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useExperienceStore } from '@/stores/ExperienceStore';
import ActivityCard from './ActivityCard';

const ActivitySlider = ({heading, showSubheading=true, current="activities"}:{heading?:string, current?:string, showSubheading?:boolean}) => {
    const {
        activities,
        events,
        fetchActivities,
        fetchEvents
    } = useExperienceStore();

    useEffect(() => {
       if(current === "activities"){
         if (activities.length === 0) {
            fetchActivities();
        }
       }else if(current === "events"){
if (events.length === 0) {
            fetchEvents();
        }
       }
    }, [fetchActivities, events.length, fetchEvents, activities.length]);

    return (
        // <section className='md:mt-8 mt-6'>
                <div className="bg-[#EFEFEF] lg:py-16 md:py-12 py-10">
            <div className="container">
                {/* Header */}
                <div className={`flex md:justify-between md:items-end flex-col md:flex-row ${showSubheading ? "gap-6.5":"md:gap-6.5 gap-4"}`}>
                    <div>
                        <div className="heading-h1 text-[#121212] leading-[120%] my-2">{heading}</div>
                        {showSubheading && (
                            <div className="text-[#666D80] font-medium">
                            The best {current} which are listed here for our best service.
                        </div>
                        )}
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
                        {
                        current === "activities"?(
                            activities.map((item, i) => (
                            <SwiperSlide key={i}>
                               <ActivityCard link={`/activities/${item.slug}`} title={item.name} persons="10" hours="2" time="December March" distance="5" price={item.price} location={item.location} images={item.images} />
                            </SwiperSlide>
                        ))
                        ):(
                            events.map((item, i) => (
                            <SwiperSlide key={i}>
                               <ActivityCard key={item._id} link={`/events/${item.slug}`} hideBottom={true} title={item.name} persons={item.persons} hours={item.time} distance="5" location={item.location} images={item.images} />
                            </SwiperSlide>
                        ))
                        )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
        // </section>
    );
};

export default ActivitySlider;
