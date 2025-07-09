'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const ExperiencesSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div className="flex md:justify-between md:items-end flex-col md:flex-row gap-6.5">
        <div>
          <div className="text-[#666D80] font-medium">//What we do</div>
          <div className="heading-h1 text-[#121212] leading-[120%] my-2">Bespoke Alpine Experiences</div>
          <div className="text-[#666D80] font-medium">
            Discover our curated collection of exclusive mountain adventures and <br className="hidden md:block" />
            services, designed to create unforgettable alpine memories.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="hover:text-white hover:bg-black transition-all duration-300 rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer bg-white"
          >
            <FaArrowLeftLong />
          </button>
          <button
            ref={nextRef}
            className="text-white bg-black rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="relative h-[370px] flex items-center mt-4 md:mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1440: { slidesPerView: 5 }, // ✅ Shows 5 slides on 1440px+
          }}
          className="w-full"
        >

          {[1, 2, 3, 4, 5, 6].map((n, index) => (
            <SwiperSlide key={n} className="h-full flex items-center justify-center">
              <div
                className={`relative rounded-[16px] overflow-hidden w-full transition-all duration-300 ${index === activeIndex ? 'sm:h-[370px] h-[340px]' : 'sm:h-[333px] h-[300px] mt-[19px]'
                  }`}
              >
                <Image
                  src={`/exp-slide-${n}.webp`}
                  alt={`Experience Slide ${n}`}
                  fill
                  className="object-cover"
                />
                <button className={`absolute top-4 right-4 text-black bg-white rounded-full h-[46px] w-[46px] flex items-center justify-center ${index === activeIndex ? '' : 'rotate-[-45deg]'
                  }  text-[18px] cursor-pointer shadow-md`}>
                  <FaArrowRightLong />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  )
}

export default ExperiencesSlider
