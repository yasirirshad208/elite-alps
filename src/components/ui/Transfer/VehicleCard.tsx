"use client"
import React, { useRef, useState } from 'react'
import { IoBagOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { LuClock, LuFuel, LuUsers } from 'react-icons/lu'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsLuggage } from 'react-icons/bs'
import { PiEngineLight, PiSeatLight } from 'react-icons/pi'
import { GiGearStick } from 'react-icons/gi'
import Link from 'next/link'

interface VehicleCardProps {
  name: string;
  passengers?: number;
  seats?: number;
  speed: string;
  engine?: string;
  fuelType?: string;
  luggage: string;
  softBags?: string;
  gearType?: string;
  image: string[]; // URL or path to the image
  navTo: string
  bookingDuration: []
}

const VehicleCard = ({ name, passengers, speed, gearType, fuelType, seats, engine, softBags, luggage, image, navTo, bookingDuration }: VehicleCardProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = image; // Use an array of images (add more if needed)


  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleDotClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleIndex = () => {
    if (activeImageIndex === images.length - 1) {
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

    if (touchDiff > 50 && activeImageIndex < images.length - 1) {
      // Swipe left to go to the next image
      setActiveImageIndex(activeImageIndex + 1);
    } else if (touchDiff < -50 && activeImageIndex > 0) {
      // Swipe right to go to the previous image
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  return (
    <div className="flex gap-5 flex-col xl:flex-row lg-gap-8">
      <div className="h-auto xl:w-[40%] w-full rounded-[12px] p-1.5 border border-[#e3e3e3] flex flex-col" style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>
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
              className="overflow-hidden sm:h-[220px] h-[185px] md:h-[257px] rounded-[12px]"
            >
              {/* Inner container with flex behavior */}
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${activeImageIndex * 100}%)`,
                }}
              >
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={"http://localhost:5000/" + img}
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
            {images.length - 1 !== activeImageIndex && (
              <div
                className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                onClick={handleIndex}
              >
                <IoIosArrowForward className="ml-[3px]" />
              </div>
            )}

            {/* Image dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
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
          {images.length - 1 !== activeImageIndex && (
            <div
              className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
              onClick={handleIndex}
            >
              <IoIosArrowForward className="ml-[3px]" />
            </div>
          )}

          {/* Image dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                  }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="p-1 pb-4 mt-3 h-full font-inter">
          <h3 className="text-[20px] font-[700] mb-2">{name}</h3>
          <div className="grid grid-cols-2 gap-4">
            <span className="font-regular text-[#121212] flex items-center gap-1">
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
            <span className="font-regular text-[#121212] flex items-center gap-1">
              <IoSpeedometerOutline className="text-[18px] md:text-[20px]" />
              {speed} km/h
            </span>
            <span className="font-regular text-[#121212] flex items-center gap-1">

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
            <span className="font-regular text-[#121212] flex items-center gap-1">
              <BsLuggage
                className="text-[18px] md:text-[20px]" />
              {luggage} Luggage
            </span>
            <span className="font-regular text-[#121212] flex items-center gap-1">
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

        </div>
      </div>

      <div className="h-auto xl:w-[60%] w-full flex flex-col">
        <h2 className="text-[18px] sm:text-[22px] md:text-[32px] text-[#121212] font-[700] mb-4">Transfer rate of {name}</h2>
        <div className="flex justify-between flex-col h-full gap-3">
          {bookingDuration.map((item: { packageName: string, duration: string, price: string }) => {
            return <div style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }} className="flex  justify-between bg-white border-[#e3e3e3] border rounded-[12px] md:pl-6 md:py-6 md:pr-4 p-2">
              <div className='flex flex-col gap-3'>
                <span className="font-large font-[600] text-[#121212]">{item.packageName}</span>

                <div className="border border-[#e3e3e3] py-1 pl-2 pr-3 rounded-[4px] font-medium text-[#121212] flex items-center gap-1.5 w-fit">
                  <LuClock className="text-[18px] text-[#121212] font-[600]" />
                  {item.duration}
                </div>

              </div>
              <div className="flex items-center flex-col gap-1 ">
                {/* <div> */}
                <span className="font-large font-[600] text-[#184E44] ">
                  From €{parseFloat(item.price)
                    .toFixed(0) // remove decimal
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <Link href={navTo}>
                  <button
                    className="bg-[#0074ec] rounded-[12px] sm:w-[120px] md:w-[140px] lg:w-[166px] p-2 sm:p-3 text-white text-[16px] md:text-[18px] text-[16px] cursor-pointer"
                  >
                    Book Now
                  </button>
                </Link>
                {/* </div> */}
              </div>
            </div>
          })

          }


        </div>
      </div>
    </div>
  )
}

export default VehicleCard 
