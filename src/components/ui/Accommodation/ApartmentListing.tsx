'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePropertyStore } from '@/stores/PropertyStore';
import AccommodationCard from '../AccommodationCard';
import CountResults from '../CountResults';
import SeeMore from '../SeeMore';
import AccommodationIconsFilter from './AccommodationFilters';
import SortBy from '../SortBy';

const ApartmentListing = ({
  location,
  price,
  guest,
  feature,
  checkin,
  checkout,
  page,
}: {
  location: string;
  price: string;
  guest: string;
  feature: string;
  checkin: string;
  checkout: string;
  page: string;
}) => {
  const { apartments, loading, error, fetchApartments, countApartments } = usePropertyStore();
 const [sort, setSort] = useState<string>('recommended');
  // Fetch unfiltered data from backend
    useEffect(() => {
   fetchApartments({
  location,
  price,
  guest,
  feature,
  checkin,
  checkout,
  page,
});
  }, [page, checkin, checkout, location, price, guest, feature]);


   const icons = [
  { name: "All", iconKey: "IoMenu" },
  { name: "Wood fireplace", iconKey: "GiWoodPile" },
  { name: "Ethanol fireplace", iconKey: "MdOutlineFireplace" },
  { name: "Gas fireplace", iconKey: "GiGasStove" },
  { name: "Ski locker", iconKey: "FaCar" },
  { name: "Parking space", iconKey: "FaCar" },
  { name: "Boots heater", iconKey: "GiBootPrints" },
  { name: "Without elevator", iconKey: "FaTimesCircle" },
  { name: "Elevator", iconKey: "BiBuildingHouse" },
  { name: "Outdoor furniture", iconKey: "MdOutlineChair" },
  { name: "Baby cot", iconKey: "FaBaby" },
  { name: "High chair", iconKey: "FaChild" },
  { name: "Safe", iconKey: "BsSafe" },
  { name: "Garage", iconKey: "PiGarageFill" },
  { name: "Board games", iconKey: "FaGamepad" },
];

const sortedApartments = useMemo(() => {
    const data = [...apartments];
    switch (sort) {
      case 'price_asc':
        return data.sort((a, b) => a.winterPrice - b.winterPrice);
      case 'price_desc':
        return data.sort((a, b) => b.winterPrice - a.winterPrice);
      case 'bedrooms_asc':
        return data.sort((a, b) => a.rooms - b.rooms);
      case 'bedrooms_desc':
        return data.sort((a, b) => b.rooms - a.rooms);
      default:
        return data; // recommended or no sort
    }
  }, [apartments, sort]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10">
      <div className="w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]"></div>

      <div className="container">
        <div className="sm:mb-[30px] mb-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-[32px]">
          <div className="overflow-hidden w-full">
            <AccommodationIconsFilter icons={icons} />
          </div>
           <div className="sm:w-auto w-full flex justify-center gap-2 sm:justify-between">
            <CountResults number={apartments.length} />
            <SortBy
              list={[
                { label: 'Recommended', value: 'recommended' },
                { label: 'Price low to high', value: 'price_asc' },
                { label: 'Price high to low', value: 'price_desc' },
                { label: 'Bedrooms min to max', value: 'bedrooms_asc' },
                { label: 'Bedrooms max to min', value: 'bedrooms_desc' }
              ]}
              onChange={(value) => setSort(value)}
            /> </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-8 mt-6">
          {sortedApartments.map((item: any, index: number) => (
            <AccommodationCard
              key={index}
              title={item.name}
              area={item.surface}
              persons={item.adults}
              location={item.station}
              bedrooms={item.rooms}
              price={item.winterPrice}
              images={item.allImages.slice(0,7)}
              id={item.propertyId}
              link={`/chalets/${item.propertyId}`}
            />
          ))}
        </div>

         {parseInt(page || "1") * 12 < countApartments && <SeeMore />}
      </div>
    </section>
  );
};

export default ApartmentListing;
