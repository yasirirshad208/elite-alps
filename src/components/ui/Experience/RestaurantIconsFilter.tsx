'use client';
import React, { useRef, useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import {
  FaConciergeBell,
  FaFish,
  FaHome,
  FaMusic,
  FaPizzaSlice,
  FaSkiing,
  FaSmile,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdOutlineDeck, MdPublic } from "react-icons/md";
import { GiChopsticks, GiKebabSpit } from "react-icons/gi";
import { LuMountainSnow } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaHeart, FaLandmark, FaMountain, FaSpa, FaTree } from "react-icons/fa6";
import { FaBaby, FaCar, FaChild, FaGamepad, FaTimesCircle } from 'react-icons/fa';
import { PiGarageFill } from 'react-icons/pi';
import { BsSafe } from 'react-icons/bs';
import { MdOutlineChair, MdOutlineFireplace } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiBootPrints, GiGasStove, GiWoodPile } from 'react-icons/gi';

type IconType = {
  name: string;
  iconKey?: string;             // optional icon key from iconMap
  svg?: React.ReactNode;        // optional SVG (ReactNode or string)
};

const iconMap: Record<string, React.ElementType> = {
  IoMenu,
  FaConciergeBell,
  FaFish,
  FaMusic,
  FaPizzaSlice,
  FaSkiing,
  FaStar,
  FaUsers,
  FaUtensils,
  MdOutlineDeck,
  MdPublic,
  GiChopsticks,
  GiKebabSpit,
  LuMountainSnow,
  FaTree,
  FaHome,
  FaMountain,
  FaSpa,
  FaHeart,
  FaSmile,
  FaLandmark,
  GiWoodPile,
  MdOutlineFireplace,
  GiGasStove,
  FaCar,
  GiBootPrints,
  FaTimesCircle,
  BiBuildingHouse,
  MdOutlineChair,
  FaBaby,
  FaChild,
  BsSafe,
  PiGarageFill,
  FaGamepad,
};

const RestaurantIconsFilter = ({ icons }: { icons: IconType[] }) => {
  const [selected, setSelected] = useState("All");
  const [showBack, setShowBack] = useState(false);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (iconName: string) => {
    setSelected(iconName);
    const params = new URLSearchParams(window.location.search);

    if (iconName === "All") {
      params.delete("feature");
    } else {
      params.set("feature", iconName);
    }

    params.delete("page");

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const scrollBack = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowBack(scrollRef.current.scrollLeft > 10);
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const featureFromUrl = params.get("feature");

  if (featureFromUrl) {
    setSelected(featureFromUrl);
  } else {
    setSelected("All");
  }
}, []);


  return (
    <div className="relative w-full ">
      {/* Scrollable icon row */}
      <div
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-9 gap-[4px] items-center text-black w-[90%] mx-auto overflow-x-auto whitespace-nowrap no-scrollbar"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {icons.map(({ name, iconKey, svg }) => {
          const Icon = iconKey ? iconMap[iconKey] : null;

          return (
            <span
              key={name}
              onClick={() => handleSelect(name)}
              className={`py-3 px-1 w-[103px] flex flex-col items-center justify-center gap-1 text-[#666D80] text-[14px] cursor-pointer text-center ${
                selected === name
                  ? "border-b-2 border-[#0074ec] bg-[#e6f0fd]"
                  : ""
              }`}
            >
              {/* Render either SVG or Icon */}
              {svg ? (
                typeof svg === "string" ? (
                  <span
                    className="w-[20px] h-[20px]"
                    dangerouslySetInnerHTML={{ __html: svg }}
                  />
                ) : (
                  <span className="w-[20px] h-[20px]">{svg}</span>
                )
              ) : (
                Icon && <Icon className="w-[20px] h-[20px]" />
              )}
              {name}
            </span>
          );
        })}
      </div>

      {showBack && (
        <div className="absolute top-1/2 left-[3%] border border-[#e3e3e3] -translate-y-1/2 flex items-center justify-center z-10 bg-white w-[32px] h-[32px] rounded-full cursor-pointer">
          <IoIosArrowBack
            onClick={scrollBack}
            className="text-[#121212] w-[16px] h-[16px]"
          />
        </div>
      )}

      <div className="absolute top-1/2 right-[3%] border border-[#e3e3e3] -translate-y-1/2 flex items-center justify-center z-10 bg-white w-[32px] h-[32px] rounded-full cursor-pointer">
        <IoIosArrowForward
          onClick={scrollNext}
          className="text-[#121212] w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
};

export default RestaurantIconsFilter;