"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import { CiLocationOn, CiRuler } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuBed } from 'react-icons/lu';

type AccommodationCard = {
  title: string;
  image?: string;
  showHandle?: Boolean;
  images?: string[];
  location: string;
  price: string;
  persons: string;
  bedrooms: string;
  area: string;
  link: string;
  id?: string;
};

const HomeAccommodationCard = ({
  title,
  image,
  showHandle = true,
  id,
  location,
  images,
  price,
  persons,
  bedrooms,
  area,
  link,
}: AccommodationCard) => {
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
    <div className="rounded-[12px] border border-[#E3E3E3] p-[6px] cursor-pointer">
      {/* Image or slider wrapped in Link */}
      <Link href={link}>
        {image && (
          <div className="relative z-0 w-full md:h-[360px] sm:h-[300px] h-[200px]">
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
              className="overflow-hidden md:h-[360px] sm:h-[300px] h-[200px] w-full"
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
                  className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                    }`}
                  onClick={(e) => handleDotClick(e, index)}
                />
              ))}
            </div>
          </div>
        )}
      </Link>

      {/* Text details */}
      <Link href={link}>
        <div className="mt-2 px-2">
          <div className="font-large text-[#121212] font-[600]">{title}</div>
          <div className="font-medium text-[#121212] text-[#272835] flex items-center gap-1 flex-wrap">
            <CiLocationOn className="md:text-[21px] text-[18px]" /> {location}
          </div>
          <div className="flex items-center gap-1 sm:mt-2 mt-1.5 font-regular">
            <div className="rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1">
              <FaRegUser className="sm:text-[15px] text-[13px]" />
              {persons} person
            </div>

            <div className="rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1">
              <LuBed className="sm:text-[15px] text-[13px]" />
              {bedrooms} Bed
            </div>

            <div className="rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1">
              <CiRuler className="text-[20px] rotate-[-45deg]" />
              {area} m²
            </div>
          </div>

          <div className="mt-2.5 mb-1 h-[1px] w-full bg-[#e3e3e3]"></div>

          <div className="font-regular text-[#121212] font-[600]">Start From</div>
          <div className="font-large text-[#184E44] font-[600] sm:mt-2 mt-1.5">
            €{parseFloat(price)
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{" "}
            / week
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeAccommodationCard;