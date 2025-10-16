"use client"
import React, { useState } from "react";
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
    image: string[]; // URL or path to the image
    showHandle?: boolean
    cardUrl?: string
    time?: string;
    persons?: string
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
    cardUrl,
}: RestaurantCardProps) => {
    const images = image; // Combine the main image and additional images

    const [activeImageIndex, setActiveImageIndex] = useState(0); // State to track the active image

    const router = useRouter()

    const handleDotClick = (index: number) => {
        setActiveImageIndex(index); // Update the active image index when a dot is clicked
    };

    const handleIndex = () => {
        if (activeImageIndex === images.slice(0, 4).length - 1) {
            setActiveImageIndex(0);
            return
        }
        setActiveImageIndex(activeImageIndex + 1);
    }

    return (
        <div className="border p-[6px] border-[#e3e3e3] rounded-[12px] ">
            <div>
                <div className="relative group cursor-pointer">
                    <div className="overflow-hidden h-[223px] w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out w-full h-full"
                            style={{
                                transform: `translateX(-${activeImageIndex * 100}%)`,
                            }}
                        >
                            {images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={`${img}`}
                                    className=" flex-shrink-0 object-cover rounded-[12px]"
                                    alt={title}
                                    fill
                                />
                            ))}
                        </div>
                    </div>
                    {showHandle && (
                        <>
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
                        </>
                    )}
                    {/* Dots */}
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
            </div>

            <div className=" cursor-pointer mt-1 p-2" onClick={() => router.push(`${cardUrl}`)}>
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

                    {/* {showLocation ? (
                        <div className="flex items-center gap-2">
                            <ImSpoonKnife className="text-[#121212] text-[18px] mt-2" />
                            <span className="text-[#272835] text-[18px] font-[400]">{location}</span>
                        </div>
                    ) : ( */}
                    <div className="flex items-center gap-2">
                        <ImSpoonKnife className="text-[#121212] text-[20px]" />
                        <span className="text-[#272835] text-[18px] font-[400]">French, Mediterranean</span>
                    </div>
                    {/* )} */}


                    <div className="border-[#e3e3e3] border-t w-full my-2"></div>


                    {showRating && (
                        <div className="flex items-center">
                            <IoStar className="text-[20px] text-[#FFA515] mb-1" />
                            <span className="ml-1.5 text-[18px] text-[#121212] font-bold mr-1">
                                5,0{" "}
                            </span>
                            <span className="text-[18px] text-[#6D6D6D]">(53) reviews</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
