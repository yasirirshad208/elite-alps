"use client"
import React, { useState, useRef } from "react";
import { FiClock } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { IoStar } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import Image from "next/image";

interface RestaurantCardProps {
    title: string;
    restaurantType?: string;
    showIcons?: boolean;
    showRating?: boolean;
    showLocation?: boolean;
    location?: string;
    image: string[];
    showHandle?: boolean
    cardUrl?: string
    time?: string;
    persons?: string
    totalReviews?: number;
    rating?: number;
    cuisine?: string;
}

const RestaurantCard = ({
    title,
    restaurantType,
    image,
    showIcons = false,
    showRating = true,
    showLocation = false,
    showHandle = true,
    time,
    persons,
    location,
    cuisine,
    rating,
    totalReviews,
    cardUrl,
}: RestaurantCardProps) => {
    const images = image;
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

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
        if (activeImageIndex === images.length - 1) return;
        setActiveImageIndex(activeImageIndex + 1);
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
        <div className="border p-[6px] border-[#e3e3e3] rounded-[12px]">
            <div>
                <div 
                    className="relative group cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className="overflow-hidden h-[223px] w-full rounded-[12px]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            ref={sliderRef}
                            className="flex w-full h-full"
                            style={{
                                transform: `translateX(calc(-${activeImageIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
                                transition: isDragging ? 'none' : 'transform 500ms ease-in-out',
                            }}
                        >
                            {images.map((img, idx) => (
                                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                                    <img
                                        src={img}
                                        className="object-cover w-full h-full rounded-[12px] pointer-events-none"
                                        alt={title}
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
            </div>

            <div className="cursor-pointer mt-1 p-2" onClick={() => router.push(`${cardUrl}`)}>
                <div>
                    <div>
                        <h3 className="text-[20px] leading-[30px] font-[700] text-[#121212]">
                            {title}
                        </h3>
                    </div>

                    {showIcons && (
                        <div className="flex items-center gap-4">
                            <span className="text-[14px] text-[#3D3D3D] flex items-center gap-1">
                                <LuUsers className="text-[18px]" />
                                1 {persons}
                            </span>

                            <span className="text-[14px] text-[#3D3D3D] flex items-center gap-1">
                                <FiClock className="text-[18px]" />
                                {time}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <ImSpoonKnife className="text-[#121212] text-[20px]" />
                        <span className="text-[#272835] text-[18px] font-[400]">{cuisine}</span>
                    </div>

                    <div className="border-[#e3e3e3] border-t w-full my-2"></div>

                    {showRating && (
                        <div className="flex items-center">
                            <IoStar className="text-[20px] text-[#FFA515] mb-1" />
                            <span className="ml-1.5 text-[18px] text-[#121212] font-bold mr-1">
                                {rating?.toFixed(1)}{" "}
                            </span>
                            <span className="text-[18px] text-[#6D6D6D]">({totalReviews}) reviews</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;