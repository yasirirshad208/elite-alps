"use client"
import React, { useRef, useState } from 'react'
import { BsLuggage } from 'react-icons/bs'
import { IoBagOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { LuFuel, LuUsers } from 'react-icons/lu'
import { PiEngineLight, PiSeatLight } from 'react-icons/pi'
import { GiGearStick } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
interface VehicleDataProp {
    hImages: Array<string>,
    name: string,
    details?: string
    isHelicopter?: boolean
    bookingDetails?: string
    passengers?: number;
    speed?: string;
    engine?: string;
    luggage?: string;
    softBags?: string;
    seats?: number
    gearType?: string
    fuelType?: string
    page: string
}

const BookingVehicle = ({ hImages, name, details, isHelicopter, page, seats, gearType, fuelType, bookingDetails, speed, engine, luggage, softBags, passengers }: VehicleDataProp) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Assuming you want to filter for the helicopter with id 1

    // const handleDotClick = (index: number) => {
    //   setCurrentIndex(index);
    // };
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleDotClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const handleIndex = () => {
        if (activeImageIndex === hImages.length - 1) {
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(activeImageIndex + 1);
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const touchDiff = touchStartX.current - touchEndX.current;

        if (touchDiff > 50 && activeImageIndex < hImages.length - 1) {
            // Swipe left to go to the next image
            setActiveImageIndex(activeImageIndex + 1);
        } else if (touchDiff < -50 && activeImageIndex > 0) {
            // Swipe right to go to the previous image
            setActiveImageIndex(activeImageIndex - 1);
        }
    };

    return (
        <div className='bg-white p-1.5 rounded-[12px] '>
            {/* Display the current image */}
            {/* <div className="w-full h-auto overflow-hidden relative flex justify-center">
        <img
          src={"https://elite-experience-backend.onrender.com/" + hImages[currentIndex]} // Default to first image if images are not available
          className="rounded-[20px] w-full object-cover lg:h-[400px] md:h-[320px] sm:h-[270px] lg:h-[240px] transition-all duration-500"
          alt={`Slide ${currentIndex + 1}`}
        />

        <div className="flex justify-center gap-2 mt-4 absolute bottom-4">
          {hImages.map((_, index) => (
            <button
              key={index}
              className={`w-[10px] h-[10px] rounded-full ${currentIndex === index ? "bg-[#fff]" : "bg-[#d9d9d9]"}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div> */}

            <div className="relative group cursor-pointer">
                {/* Outer container to hide overflow */}
                <div
                    className="relative group cursor-pointer"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Outer container to hide overflow */}
                    <div
                        className="overflow-hidden lg:h-[400px] md:h-[320px] sm:h-[270px] h-[240px] rounded-[12px]"
                    >
                        {/* Inner container with flex behavior */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{
                                transform: `translateX(-${activeImageIndex * 100}%)`,
                            }}
                        >
                            {hImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={"https://elite-experience-backend.onrender.com/" + img}
                                    alt={name}
                                    className="w-full h-full object-cover flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Previous button */}
                    {activeImageIndex > 0 && (
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                            onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                        >
                            <IoIosArrowBack className="mr-[2px]" />
                        </div>
                    )}

                    {/* Next button */}
                    {hImages.length - 1 !== activeImageIndex && (
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                            onClick={handleIndex}
                        >
                            <IoIosArrowForward className="ml-[3px]" />
                        </div>
                    )}

                    {/* Image dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {hImages.map((_, index) => (
                            <div
                                key={index}
                                className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                                    }`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation buttons */}
                {activeImageIndex > 0 && (
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                        onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                    >
                        <IoIosArrowBack className="mr-[2px]" />
                    </div>
                )}
                {hImages.length - 1 !== activeImageIndex && (
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                        onClick={handleIndex}
                    >
                        <IoIosArrowForward className="ml-[3px]" />
                    </div>
                )}

                {/* Image dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {hImages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                                }`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>

            <div className='px-2'>
               <h1 className="uppercase text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-[600] mt-3 text-[#121212]">
  {name}
</h1>

                <div className="flex items-center gap-x-2 gap-y-2 mt-3 mb-3 px-1 flex-wrap">
                    {/* <span className="flex items-center gap-2 lg:text-[18px] md:text-[16px] text-[15px] text-[#3d3d3d]"> */}
                    <span className="py-1 pl-2 pr-3 border border-[#e3e3e3] rounded-[12px] font-regular text-[#121212] flex items-center gap-1">
                        {seats &&
                            <>
                                <PiSeatLight className="text-[18px] md:text-[20px]" />
                                {seats} seats
                            </>
                        }

                        {passengers &&
                            <>
                                <LuUsers className="text-[18px] md:text-[20px]" />
                                {passengers} passengers
                            </>
                        }

                    </span>
                    <span className="py-1 pl-2 pr-3 border border-[#e3e3e3] rounded-[12px] font-regular text-[#121212] flex items-center gap-1">
                        <IoSpeedometerOutline className="text-[18px] md:text-[20px]" />
                        {speed}
                    </span>
                    <span className="py-1 pl-2 pr-3 border border-[#e3e3e3] rounded-[12px] font-regular text-[#121212] flex items-center gap-1">

                        {gearType &&
                            <>
                                <GiGearStick className="text-[18px] md:text-[20px]" />
                                {gearType}
                            </>
                        }
                        {engine &&
                            <>
                                <PiEngineLight className="text-[18px] md:text-[20px]" />
                                {engine}
                            </>
                        }
                    </span>
                    <span className="py-1 pl-2 pr-3 border border-[#e3e3e3] rounded-[12px] font-regular text-[#121212] flex items-center gap-1">
                        <BsLuggage
                            className="text-[18px] md:text-[20px]" />
                        {luggage} Luggage
                    </span>
                    <span className="py-1 pl-2 pr-3 border border-[#e3e3e3] rounded-[12px] font-regular text-[#121212] flex items-center gap-1">
                        {fuelType &&
                            <>
                                <LuFuel className="text-[18px] md:text-[20px]" />
                                {fuelType}
                            </>
                        }
                        {softBags &&
                            <>
                                <IoBagOutline
                                    className="text-[18px] md:text-[20px]" />
                                {softBags} Soft bags
                            </>
                        }

                    </span>
                </div>

                <div className='w-full h-[1px] bg-[#e3e3e3] mt-4 mb-3'></div>

                

                <h3 className="font-large text-[#121212] font-[600] mt-3 mb-2">{page} Details</h3>

                <p className="font-medium text-[#666D80] mb-3 text-justify"> {details}</p>
            </div>
        </div>
    );
};

export default BookingVehicle;
