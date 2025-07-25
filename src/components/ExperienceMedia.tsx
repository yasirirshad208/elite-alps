"use client";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ExperienceMediaProps {
  images?: Array<string>
  imageString?: string[]
  url?: string
}
const ExperienceMedia = ({ images, url = "https://elite-experience-backend.onrender.com/" }: ExperienceMediaProps) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  const itemImages: string[] = images ?? [];





  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (itemImages.length + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + itemImages.length + 1) % (itemImages.length + 1));
  };

  return (
    <div>

      <div className="flex items-center md:h-[439px] h-[320px] gap-3">
  {/* First Image Block */}
  <div className="flex-1 h-full">
    <div className="relative flex-1 h-full">
      <img
        src={itemImages[0] ? url + itemImages[0] : "https://via.placeholder.com/150"}
        alt="Image"
        className="h-full w-full sm:rounded-[12px] object-cover"
      />

      {/* See All Images Button for Small Screens */}
      <div
        className="absolute rounded-[38px] bg-white/70 text-[14px] bottom-[20px] right-[20px] px-3 py-1 cursor-pointer font-inter md:hidden"
        onClick={openModal}
      >
        1/{itemImages.length}
      </div>
    </div>
  </div>

  {/* Grid of Images (Only for md and up) */}
  <div className="flex-1 md:grid grid-cols-2 grid-rows-2 gap-3 h-full relative hidden md:block">
    {itemImages.slice(1, 5).map((image, index) => {
      // For 5th image
      if (index === 3) {
        return (
          <div
            className="h-full w-full relative rounded-[12px] overflow-hidden"
            key={index}
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.41)), url(${url + image}) center/cover no-repeat`,
            }}
          >
            {/* Centered Button on 5th Image */}
            <div
              className="absolute inset-0 flex items-center justify-center text-black font-inter text-[14px] cursor-pointer"
              onClick={openModal}
            >
              <button className="bg-white/70 px-3 py-1.5 rounded-[24px] cursor-pointer"> 
                See all images
              </button>
            </div>
          </div>
        );
      }

      // For other images
      return (
        <div className="h-full w-full" key={index}>
          <img
            src={url + image}
            className="h-full w-full object-cover rounded-[12px]"
            alt={`Slide ${index + 1}`}
          />
        </div>
      );
    })}
  </div>
</div>


      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          style={{ backdropFilter: 'blur(2.35px)' }}
        >
          <div className="w-11/12 max-w-4xl">
            <div className="relative lg:static">
              {/* Image & Close Button */}
              <div className="relative">
                {/* ❌ Close Icon on Image */}
                <button
                  className="absolute top-2 right-2 text-black bg-white rounded-full sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] flex justify-center items-center z-10"
                  onClick={closeModal}
                  aria-label="Close Modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* 📷 Image */}
                <img
                  src={url + itemImages[currentSlide]}
                  className="md:h-[450px] h-[273px] w-full rounded-[15px] object-cover"
                  alt={`Slide ${currentSlide}`}
                />
              </div>

              {/* 🔢 Slide Number */}
              <div className="font-inter flex justify-center mt-3">
                <span className="text-white sm:text-[18px] text-[16px]">
                  {currentSlide + 1}
                </span>
                <span className="text-white/70 sm:text-[18px] text-[16px]">
                  /{itemImages.length + 1}
                </span>
              </div>

              {/* ⬅️ Prev Slide Button (Outside Image) */}
              <button
                className="absolute top-1/2 lg:left-14 left-1 transform -translate-y-1/2 rounded-full sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] border border-white border-2 text-black bg-white sm:text-[22px] text-[18px] flex items-center justify-center"
                onClick={prevSlide}
              >
                <BsArrowLeft />
              </button>

              {/* ➡️ Next Slide Button (Outside Image) */}
              <button
                className="absolute top-1/2 lg:right-14 right-1 transform -translate-y-1/2 rounded-full sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] border border-white border-2 text-black bg-white  sm:text-[22px] text-[18px] flex items-center justify-center"
                onClick={nextSlide}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ExperienceMedia;
