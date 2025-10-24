"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface ExperienceMediaProps {
  images?: Array<string>
  imageString?: string[]
  url?: string
}
const ExperienceMedia = ({ images, url = "https://elite-experience-backend.onrender.com/" }: ExperienceMediaProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mainCurrentSlide, setMainCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemImages: string[] = images ?? [];

  // Preload all images on component mount
  useEffect(() => {
    if (itemImages.length > 0) {
      itemImages.forEach((src) => {
        const img = new Image();
        img.src = url + src;
      });
    }
  }, [itemImages, url]);

  useEffect(() => {
    if (isModalOpen && itemImages.length > 0) {
      itemImages.forEach((src) => {
        const img = new Image();
        img.src = url + src;
      });
    }
  }, [isModalOpen, itemImages, url]);

  const openModal = () => {
    setCurrentSlide(mainCurrentSlide);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (itemImages.length));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + itemImages.length) % itemImages.length);
  };

  const nextMainSlide = () => {
    if (isTransitioning) return;
    setSlideDirection('left');
    setIsTransitioning(true);
    setMainCurrentSlide((prev) => (prev + 1) % (itemImages.length));
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 300);
  };

  const prevMainSlide = () => {
    if (isTransitioning) return;
    setSlideDirection('right');
    setIsTransitioning(true);
    setMainCurrentSlide((prev) => (prev - 1 + itemImages.length) % itemImages.length);
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleModalTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleModalTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleModalSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMainSlide();
    } else if (isRightSwipe) {
      prevMainSlide();
    }
  };

  const handleModalSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const getNextIndex = () => (mainCurrentSlide + 1) % itemImages.length;
  const getPrevIndex = () => (mainCurrentSlide - 1 + itemImages.length) % itemImages.length;

  return (
    <div>
      <div className="flex items-center md:h-[439px] h-[320px] gap-3">
        {/* First Image Block with Slide Effect */}
        <div className="flex-1 h-full">
          <div className="relative flex-1 h-full overflow-hidden sm:rounded-[12px]">
            {/* Preload adjacent images */}
            <img
              src={itemImages[getPrevIndex()] ? url + itemImages[getPrevIndex()] : ""}
              alt=""
              className="hidden"
            />
            <img
              src={itemImages[getNextIndex()] ? url + itemImages[getNextIndex()] : ""}
              alt=""
              className="hidden"
            />

            {/* Previous Image (behind, for right swipe) */}
            <img
              src={itemImages[getPrevIndex()] ? url + itemImages[getPrevIndex()] : "https://via.placeholder.com/150"}
              alt="Previous Image"
              className={`h-full w-full object-cover absolute inset-0 transition-transform duration-300 ease-out ${
                slideDirection === 'right' ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ zIndex: slideDirection === 'right' ? 2 : 0 }}
            />

            {/* Current Image */}
            <img
              src={itemImages[mainCurrentSlide] ? url + itemImages[mainCurrentSlide] : "https://via.placeholder.com/150"}
              alt="Image"
              className={`h-full w-full object-cover cursor-pointer absolute inset-0 transition-transform duration-300 ease-out ${
                slideDirection === 'left' ? '-translate-x-full' : 
                slideDirection === 'right' ? 'translate-x-full' : 
                'translate-x-0'
              }`}
              style={{ zIndex: 1 }}
              onClick={() => {
                openModal();
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />

            {/* Next Image (behind, for left swipe) */}
            <img
              src={itemImages[getNextIndex()] ? url + itemImages[getNextIndex()] : "https://via.placeholder.com/150"}
              alt="Next Image"
              className={`h-full w-full object-cover absolute inset-0 transition-transform duration-300 ease-out ${
                slideDirection === 'left' ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ zIndex: slideDirection === 'left' ? 2 : 0 }}
            />

            {/* See All Images Button for Small Screens */}
            <div
              className="absolute rounded-[38px] bg-white/70 text-[14px] bottom-[20px] right-[20px] px-3 py-1 cursor-pointer font-inter md:hidden z-10"
              onClick={openModal}
            >
              {mainCurrentSlide + 1}/{itemImages.length}
            </div>
          </div>
        </div>

        {/* Grid of Images (Only for md and up) */}
        <div className="flex-1 md:grid grid-cols-2 grid-rows-2 gap-3 h-full relative hidden md:block">
          {itemImages.slice(1, 5).map((image, index) => {
            const actualIndex = index + 1;

            if (index === 3) {
              return (
                <div
                  className="h-full w-full relative rounded-[12px] overflow-hidden cursor-pointer"
                  key={index}
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.41)), url(${url + image}) center/cover no-repeat`,
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center text-black font-inter text-[14px] cursor-pointer"
                    onClick={() => {
                      setCurrentSlide(actualIndex);
                      openModal();
                    }}
                  >
                    <button className="bg-white/70 px-3 py-1.5 rounded-[24px] cursor-pointer">
                      See all images
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div className="h-full w-full" key={index}>
                <img
                  src={url + image}
                  className="h-full w-full object-cover rounded-[12px] cursor-pointer"
                  alt={`Slide ${actualIndex}`}
                  onClick={() => {
                    setCurrentSlide(actualIndex);
                    openModal();
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.50)] backdrop-blur-[2.35px] flex items-center justify-center z-50"
          style={{ backdropFilter: 'blur(2.35px)' }}
        >
          <div className="w-11/12 max-w-4xl">
            <div className="relative lg:static">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-black bg-white rounded-full sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] flex justify-center items-center z-30 cursor-pointer"
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

                <div
                  className="relative md:h-[450px] h-[273px] w-full rounded-[15px] overflow-hidden"
                  onTouchStart={handleModalTouchStart}
                  onTouchEnd={handleModalTouchEnd}
                >
                  {itemImages.map((src, index) => (
                    <img
                      key={index}
                      src={url + src}
                      className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-300 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      alt={`Slide ${index}`}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              <div className="font-inter flex justify-center mt-3">
                <span className="text-white sm:text-[18px] text-[16px]">
                  {currentSlide + 1}
                </span>
                <span className="text-white/70 sm:text-[18px] text-[16px]">
                  /{itemImages.length}
                </span>
              </div>

              <button
                className="absolute top-1/2 z-10 lg:left-14 left-1 transform -translate-y-1/2 rounded-full sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] border border-white border-2 text-black bg-white sm:text-[22px] text-[18px] flex items-center justify-center cursor-pointer hidden md:flex"
                onClick={prevSlide}
              >
                <BsArrowLeft />
              </button>

              <button
                className="absolute top-1/2 z-10 lg:right-14 right-1 transform -translate-y-1/2 rounded-full sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] border border-white border-2 text-black bg-white  sm:text-[22px] text-[18px] flex items-center justify-center cursor-pointer hidden md:flex"
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