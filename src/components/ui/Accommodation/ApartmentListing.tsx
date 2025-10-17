'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePropertyStore } from '@/stores/PropertyStore';
import AccommodationCard from '../AccommodationCard';
import CountResults from '../CountResults';
import SeeMore from '../SeeMore';
import AccommodationIconsFilter from './AccommodationFilters';
import SortBy from '../SortBy';
import AccommodationCardSkeleton from '@/components/skeletons/AccommodationCardSkeleton';
import NoRecord from '../NoRecord';

const ApartmentListing = ({
  location,
    minPrice,
         maxPrice,
  guest,
  feature,
  checkin,
  checkout,
  page,
}: {
  location: string;
  minPrice: string;
  maxPrice:string
  guest: string;
  feature: string;
  checkin: string;
  checkout: string;
  page: string;
}) => {
  const { apartments, error, fetchApartments, countApartments } = usePropertyStore();
  const [sort, setSort] = useState<string>('recommended');
  const [loading, setLoading] = useState<Boolean>(true);
  // Fetch unfiltered data from backend
  useEffect(() => {
    const loadData = async () => {
        setLoading(true)
        await fetchApartments({
          location,
            minPrice,
         maxPrice,
          guest,
          feature,
          checkin,
          checkout,
          page,
          sort
        });
        setLoading(false)
     
    }
    loadData()
    
  }, [page, checkin, checkout, location,   minPrice,
         maxPrice, sort, guest, feature]);


  const icons = [
  // Based on your provided text (in the same order)
  
  { name: "All", iconKey: "IoMenu" },
  { name: "Ski-in Ski-out", iconKey: "FaSkiingNordic" },
  { name: "Near slopes", iconKey: "GiMountains" },
  { name: "Near the center", iconKey: "MdLocationCity" },
  { name: "Home cinema room", iconKey: "MdOutlineTheaters" },
  { name: "Swimming pool", iconKey: "FaSwimmingPool" },
  { name: "Hammam", iconKey: "GiSteam" },
  { name: "Nordic bath", iconKey: "GiBathtub" },
  { name: "Indoor jacuzzi", iconKey: "FaHotTub" },
  { name: "Outdoor jacuzzi", iconKey: "FaHotTub" },
  { name: "Fitness room", iconKey: "FaDumbbell" },
  { name: "Wood fireplace", iconKey: "GiWoodPile" },
  { name: "Ethanol fireplace", iconKey: "MdOutlineFireplace" },
  { name: "Snooker", iconKey: "GiEightBall" },
  { name: "Garage", iconKey: "PiGarageFill" },
  { name: "Parking space", iconKey: "FaParking" },

  // Remaining ones (not mentioned in text)
  { name: "Ski locker", iconKey: "GiSkiBoot" },
  { name: "Elevator", iconKey: "BiBuildingHouse" },
  { name: "Centre", iconKey: "MdLocationOn" }
];

  // const sortedApartments = useMemo(() => {
  //   const data = [...apartments];
  //   switch (sort) {
  //     case 'price_asc':
  //       return data.sort((a, b) => a.winterPrice - b.winterPrice);
  //     case 'price_desc':
  //       return data.sort((a, b) => b.winterPrice - a.winterPrice);
  //     case 'bedrooms_asc':
  //       return data.sort((a, b) => a.rooms - b.rooms);
  //     case 'bedrooms_desc':
  //       return data.sort((a, b) => b.rooms - a.rooms);
  //     default:
  //       return data; // recommended or no sort
  //   }
  // }, [apartments, sort]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10">
      <div className="w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]"></div>

      <div className="container">
        <div className="sm:mb-[30px] mb-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-[32px]">
          <div className="overflow-hidden w-full">
            <AccommodationIconsFilter icons={icons} />
          </div>
          <div className="sm:w-auto w-full flex sm:justify-center gap-2 justify-between">
            <CountResults number={countApartments} />
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
  {loading ? (
    Array.from({ length: 8 }).map((_, i) => (
      <AccommodationCardSkeleton key={i} />
    ))
  ) : apartments.length === 0 ? (
     <div className='col-span-full'>
              <NoRecord page='apartments' />
            </div>
  ) : (
    apartments.map((item: any, index: number) => (
      <AccommodationCard
        key={index}
        title={item.name}
        area={item.surface}
        persons={item.adults}
        location={item.station}
        bedrooms={item.rooms}
        price={item.winterPrice}
        images={item.allImages.slice(0, 7)}
        id={item.propertyId}
        link={`/apartments/${item.propertyId}`}
      />
    ))
  )}
</div>


        {parseInt(page || "1") * 12 < countApartments && <SeeMore />}
      </div>
    </section>
  );
};

export default ApartmentListing;
