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

import { MdOutlineTheaters, MdLocationOn, MdLocationCity } from "react-icons/md";
import { GiSkiBoot, GiSteam, GiBathtub, GiEightBall, GiMountains } from "react-icons/gi";
import { FaParking, FaDumbbell, FaHotTub, FaSwimmingPool, FaSkiingNordic } from "react-icons/fa";



type IconType = {
  name: string;
  iconKey?: string;
  svg?: React.ReactNode;
};

const iconMap: Record<string, React.ElementType> = {

  FaConciergeBell,
  IoMenu,
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

  // New ones
  GiSkiBoot,
  FaParking,
  FaDumbbell,
  GiSteam,
  GiBathtub,
  FaHotTub,
  FaSwimmingPool,
  GiEightBall,
  MdOutlineTheaters,
  MdLocationOn,
  GiMountains,
  MdLocationCity,
  FaSkiingNordic,
};

const AccommodationIconsFilter = ({ icons }: { icons: IconType[] }) => {
  const [selected, setSelected] = useState<string[]>(["All"]);
  const [showBack, setShowBack] = useState(false);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (iconName: string) => {
    let updated: string[] = [];

    if (iconName === "All") {
      updated = ["All"];
    } else {
      // If "All" is currently selected, remove it before adding new
      const withoutAll = selected.filter((item) => item !== "All");

      if (withoutAll.includes(iconName)) {
        // Deselect the icon
        updated = withoutAll.filter((item) => item !== iconName);
      } else {
        // Select the icon
        updated = [...withoutAll, iconName];
      }

      // If no selection remains, default back to "All"
      if (updated.length === 0) {
        updated = ["All"];
      }
    }

    setSelected(updated);

    // Update query params
    const params = new URLSearchParams(window.location.search);
    if (updated.includes("All")) {
      params.delete("feature");
    } else {
      params.set("feature", updated.join(","));
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
      setSelected(featureFromUrl.split(","));
    } else {
      setSelected(["All"]);
    }
  }, []);

  return (
 <div className="relative w-full">
  <div
    ref={scrollRef}
    className="flex gap-[4px] items-center text-black w-[90%] mx-auto overflow-x-auto no-scrollbar"
    style={{ scrollbarWidth: "none" }}
  >
    {icons.map(({ name, iconKey, svg }) => {
      const Icon = iconKey ? iconMap[iconKey] : null;
      const isActive = selected.includes(name);

      return (
        <div
          key={name}
          onClick={() => handleSelect(name)}
          className={`py-3 px-2 min-w-[103px] flex-shrink-0 inline-flex flex-col items-center justify-center gap-1 text-[#666D80] text-[14px] cursor-pointer text-center ${isActive ? "border-b-2 border-[#0074ec] bg-[#e6f0fd]" : ""
            }`}
          style={{ width: "fit-content" }}
        >
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
          <span className="whitespace-nowrap">{name}</span>
        </div>
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

  <div className="absolute top-1/2 right-[3%] border border-[#e3e3e3] -translate-y-1/2 flex items-center justify-center z-0 bg-white w-[32px] h-[32px] rounded-full cursor-pointer">
    <IoIosArrowForward
      onClick={scrollNext}
      className="text-[#121212] w-[16px] h-[16px]"
    />
  </div>
</div>



  );
};

export default AccommodationIconsFilter;
