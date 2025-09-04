"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import HomeAccommodationCard from "./HomeAccommodationCard";
import { usePropertyStore } from "@/stores/PropertyStore";
import HomeAccommodationCardSkeleton from "../skeletons/HomeAccommodationCardSkeleton";

const HomeListing = () => {
  const [selected, setSelected] = useState("chalets");
  const {
    sliderApartments,
    sliderChalets,
    fetchSliderApartments,
    fetchSliderChalets,
  } = usePropertyStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (sliderChalets.length === 0) {
        setLoading(true);
        await Promise.all([fetchSliderApartments(), fetchSliderChalets()]);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    loadData();
  }, [fetchSliderChalets, fetchSliderApartments, sliderChalets.length]);

  return (
    <div className="container">
      {/* Headings */}
      <div>
        <div className="text-[#666D80] font-medium text-center">//Our Listings</div>
        <div className="heading-h1 text-[#121212] leading-[120%] my-2 text-center">
          Alpine Escapes That Captivate the Soul
        </div>
        <div className="text-[#666D80] font-medium text-center">
          Our hand-selected portfolio of the most extraordinary <br className="hidden md:block" /> mountain residences.
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center md:mt-12 mt-8">
        <div className="bg-[#efefef] p-1 rounded-[12px] flex items-center gap-2">
          {/* Chalets */}
          <button
            className={`px-4 py-2 rounded-[6px] font-[600] ${
              selected === "chalets" ? "text-black bg-white" : "text-[#666D80] bg-[#efefef]"
            }`}
            onClick={() => setSelected("chalets")}
          >
            Chalets
          </button>
          {/* Apartments */}
          <button
            className={`px-4 py-2 rounded-[6px] font-[600] ${
              selected === "apartments" ? "text-black bg-white" : "text-[#666D80] bg-[#efefef]"
            }`}
            onClick={() => setSelected("apartments")}
          >
            Apartments
          </button>
          {/* Hotels */}
          <button
            className={`px-4 py-2 rounded-[6px] font-[600] ${
              selected === "hotels" ? "text-black bg-white" : "text-[#666D80] bg-[#efefef]"
            }`}
            onClick={() => setSelected("hotels")}
          >
            Hotels
          </button>
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-12 mt-8">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <HomeAccommodationCardSkeleton key={i} />)
          : selected === "apartments" || selected === "hotels"
          ? sliderApartments.slice(2, 5).map((item, index) => (
              <HomeAccommodationCard
                key={index}
                title={item.name}
                area={item.surface}
                persons={item.adults}
                location={item.station}
                bedrooms={item.rooms}
                price={item.winterPrice}
                image={item.mainImage}
                link={`/chalets/${item.propertyId}`}
              />
            ))
          : sliderChalets.slice(2, 5).map((item, index) => (
              <HomeAccommodationCard
                key={index}
                title={item.name}
                area={item.surface}
                persons={item.adults}
                location={item.station}
                bedrooms={item.rooms}
                price={item.winterPrice}
                images={item.allImages.slice(0, 7)}
                id={item.propertyId}
                link={`/chalets/${item.propertyId}`}
              />
            ))}
      </div>

      {/* Button */}
      <div className="flex justify-center md:mt-12 mt-8 w-full">
        <Link href={`/${selected}`} className="sm:w-auto w-full">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white rounded-[9999px] px-[24px] py-[12px] font-[600] border border-[#E3E3E3] mt-4">
            View All Properties <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeListing;
