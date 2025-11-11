"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react'
import { CiRuler } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuBed } from 'react-icons/lu';

type AccommodationCard = {
    title: string;
    image?: string;
    images?: string[];
    location: string;
    price: string;
    persons?: string;
    bedrooms?: string;
    area?: string;
    showHandle?: Boolean;
    link: string;
    stars?: string
    id?: string
};

const AccommodationCard = ({ title, image, id, stars, showHandle = true, images, location, price, persons, bedrooms, area, link }: AccommodationCard) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImageIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!images || images.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === images.length - 1 ? prev : prev + 1
    );
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!images || images.length === 0) return;

    const movedBy = currentTranslate - prevTranslate;
    const threshold = 50;

    if (movedBy < -threshold && activeImageIndex < images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    } else if (movedBy > threshold && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!images || images.length === 0) return;

    const movedBy = currentTranslate - prevTranslate;
    const threshold = 50;

    if (movedBy < -threshold && activeImageIndex < images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    } else if (movedBy > threshold && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div className="rounded-[12px] bg-white border border-[#E3E3E3] p-[6px] cursor-pointer">
      {/* Image / Slider wrapped in Link */}
      <Link href={link}>
        {image && (
          <div className="relative z-0 w-full h-[223px]">
            <Image
              src={image}
              alt="Accommodation Card Image"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw"
              className="object-cover rounded-[9px]"
            />
          </div>
        )}

        {images && (
          <div 
            className="relative z-0 group cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="overflow-hidden h-[223px] w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out w-full h-full"
                style={{
                  transform: `translateX(calc(-${activeImageIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
                  transition: isDragging ? 'none' : 'transform 500ms ease-in-out',
                }}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 h-full">
                    <img
                      src={`https://admin.cimalpes.com/photos/bien/${id}/${img}`}
                      alt={title}
                      className="object-cover rounded-[9px] w-full h-full pointer-events-none"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>

            {showHandle && (
              <>
                {activeImageIndex > 0 && (
                  <div
                    className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                    onClick={handlePrev}
                  >
                    <IoIosArrowBack className="mr-[2px]" />
                  </div>
                )}
                {images.length - 1 !== activeImageIndex && (
                  <div
                    className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className="ml-[3px]" />
                  </div>
                )}
              </>
            )}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${
                    activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                  }`}
                  onClick={(e) => handleDotClick(e, index)}
                />
              ))}
            </div>
          </div>
        )}
      </Link>



            <Link href={link}>
                <div className='mt-2 px-2'>
                    <div className='font-large text-[#121212] font-[600]'>{title}</div>
                    <div className='font-medium text-[#121212] text-[#272835] flex items-center gap-1 flex-wrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                            <path d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z" fill="#272835" />
                        </svg>
                        {location}</div>
                    <div className='flex items-center gap-1 sm:mt-2 mt-1.5 font-regular'>
                        {!stars ? (
                            <>
                                <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                                    <FaRegUser className='sm:text-[15px] text-[13px]' />

                                    {persons} person
                                </div>

                                <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                                    <LuBed className='sm:text-[15px] text-[13px]' />

                                    {bedrooms} Bed
                                </div>

                                <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                                    <CiRuler className='text-[20px] rotate-[-45deg]' />
                                    {area} m²
                                </div>
                            </>
                        ) : (
                            <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <mask id="mask0_187_5448" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_187_5448)">
                                        <path d="M9.675 13.7L10.55 10.85L8.25 9H11.1L12 6.2L12.9 9H15.75L13.425 10.85L14.3 13.7L12 11.925L9.675 13.7ZM6 23V15.275C5.36667 14.575 4.875 13.775 4.525 12.875C4.175 11.975 4 11.0167 4 10C4 7.76667 4.775 5.875 6.325 4.325C7.875 2.775 9.76667 2 12 2C14.2333 2 16.125 2.775 17.675 4.325C19.225 5.875 20 7.76667 20 10C20 11.0167 19.825 11.975 19.475 12.875C19.125 13.775 18.6333 14.575 18 15.275V23L12 21L6 23ZM12 16C13.6667 16 15.0833 15.4167 16.25 14.25C17.4167 13.0833 18 11.6667 18 10C18 8.33333 17.4167 6.91667 16.25 5.75C15.0833 4.58333 13.6667 4 12 4C10.3333 4 8.91667 4.58333 7.75 5.75C6.58333 6.91667 6 8.33333 6 10C6 11.6667 6.58333 13.0833 7.75 14.25C8.91667 15.4167 10.3333 16 12 16ZM8 20.025L12 19L16 20.025V16.925C15.4167 17.2583 14.7875 17.5208 14.1125 17.7125C13.4375 17.9042 12.7333 18 12 18C11.2667 18 10.5625 17.9042 9.8875 17.7125C9.2125 17.5208 8.58333 17.2583 8 16.925V20.025Z" fill="#121212" />
                                    </g>
                                </svg>
                                {stars} star
                            </div>
                        )}


                    </div>
                    <div className='mt-2.5  h-[1px] w-full bg-[#e3e3e3]'></div>
                    <div className='font-regular text-[#121212] font-[600] sm:mt-2 mt-1.5'>Starts From</div>
                    <div className='font-large text-[#184E44] font-[600] sm:mt-2 mt-1.5'>€{parseFloat(price)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / week</div>
                </div>
            </Link>

        </div>
    )
}

export default AccommodationCard