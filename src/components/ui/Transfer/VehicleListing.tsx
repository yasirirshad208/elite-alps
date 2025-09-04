"use client"

import { useTransferStore } from '@/stores/TransferStore';
import React, { useEffect, useState } from 'react'
import VehicleCard from './VehicleCard';
import VehicleCardSkeleton from '@/components/skeletons/VehicleCardSkeleton';

type VehicleListingProps = {
  departure: string,
  destination: string,
  passengers: string,
  page: string,
  current: string
}

const VehicleListing = ({ departure, destination, passengers, page, current }: VehicleListingProps) => {
  const {
    fetchJets,
    fetchHelicopters,
    fetchCars,
    jets,
    helicopters,
    cars,
    error
  } = useTransferStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (current === "jets" && jets.length === 0) {
        await fetchJets({ departure, destination, passengers, page });
      } else if (current === "helicopters" && helicopters.length === 0) {
        await fetchHelicopters({ departure, destination, passengers, page: '1' });
      } else if (current === "cars" && cars.length === 0) {
        await fetchCars({ departure, destination, passengers, page: '1' });
      }
      setLoading(false);
    };

    fetchData();
  }, [departure, destination, passengers, page, current]);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
     <section className='sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10'>
      <div className='w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]'></div>  
      <div className='container'>
        <div className='flex flex-col gap-[20px] md:gap-[36px] lg:gap-[48px]'>
          {loading ? (
            // Skeleton loader (show 2-3 cards for realism)
            Array.from({ length: 3 }).map((_, i) => <VehicleCardSkeleton key={i} />)
          ) : (
            <>
              {current === "jets" &&
                jets.map((item: any) => (
                  <VehicleCard
                    key={item._id}
                    bookingDuration={item.bookingDuration}
                    name={item.model}
                    passengers={item.passengerCapacity}
                    speed={item.cruisingSpeed}
                    engine={item.engine}
                    softBags={item.luggage.softBags}
                    luggage={item.luggage.cabinBags}
                    image={item.images}
                    navTo={`/jets/${item.slug}`}
                  />
                ))
              }

              {current === "helicopters" &&
                helicopters.map((item: any) => (
                  <VehicleCard
                    key={item._id}
                    bookingDuration={item.bookingDuration}
                    name={item.model}
                    passengers={item.passengerCapacity}
                    speed={item.cruisingSpeed}
                    engine={item.engine}
                    softBags={item.luggage.softBags}
                    luggage={item.luggage.cabinBags}
                    image={item.images}
                    navTo={`/helicopters/${item.slug}`}
                  />
                ))
              }

              {current === "cars" &&
                cars.map((item: any) => (
                  <VehicleCard
                    key={item._id}
                    bookingDuration={item.bookingDuration}
                    name={item.model}
                    gearType={item.gearType}
                    speed={item.cruisingSpeed}
                    seats={item.seats}
                    softBags={item.luggage.softBags}
                    luggage={item.luggage.cabinBags}
                    image={item.images}
                    navTo={`cars/${item.slug}`}
                  />
                ))
              }
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default VehicleListing
