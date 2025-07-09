'use client'

import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
    {
        name: 'Sarah L',
        location: 'London, UK',
        quote: '“Elite Alps understood exactly what we were looking for. Our chalet exceeded expectations, and the personal concierge made our stay truly seamless.”',
    },
    {
        name: 'Mark D',
        location: 'New York, USA',
        quote: '“An unforgettable experience. The team was incredibly professional and every detail was taken care of before we even asked.”',
    },
    {
        name: 'Emily R',
        location: 'Sydney, Australia',
        quote: '“From booking to check-out, the experience was flawless. We’ll definitely be back next season.”',
    },
]

const HomeTestimonials = () => {
    return (
        <div className='lg:py-16 md:py-12 py-10'>
            <div className="container">
                <div>
                    <div className="text-[#666D80] font-medium text-center">//Testimonials</div>
                    <div className="heading-h1 text-[#121212] leading-[120%] my-2 text-center">Stories from the Slopes</div>
                    <div className="text-[#666D80] font-medium text-center">
                        Experiences shared by our distinguished clientele from around the world.
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    className='mt-10'
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex justify-center my-6'>
                                <div className='relative w-[187px] h-[232px] sm:w-[250px] sm:h-[300px] md:w-[350px] md:h-[380px] lg:w-[459px] lg:h-[452px]'>
                                    <Image fill src="/testimonial-1.png" alt='Testimonial' />
                                </div>
                            </div>

                            <div className='flex items-center flex-col md:gap-6 gap-4 mt-2'>
                                <div className='font-large font-[600] text-[#121212] text-center max-w-[550px]'>
                                    {item.quote}
                                </div>
                                <div className='flex justify-center items-center gap-3 font-medium '>
                                    <span>{item.name}</span>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex items-center justify-center gap-2 md:mt-10 mt-7'>
                    <button className='prev-btn cursor-pointer px-4 py-3 flex gap-2.5  rounded-[9999px] items-center border border-[#e3e3e3]'>
                        <FaArrowLeftLong className='text-[18px] font-[400]' />
                        <span className='font-medium font-[700]'>Prev</span>
                    </button>

                    <button className='next-btn cursor-pointer px-4 py-3 flex gap-2.5 rounded-[9999px] items-center border border-[#e3e3e3]'>
                        <span className='font-medium font-[700]'>Next</span>
                        <FaArrowRightLong className='text-[18px] font-[400]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials
