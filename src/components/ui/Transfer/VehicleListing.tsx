"use client"

import { useTransferStore } from '@/stores/TransferStore';
import React, { useEffect } from 'react'
import VehicleCard from './VehicleCard';

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
    loading,
    error
  } = useTransferStore();

  useEffect(() => {
    if (current === "jets" && jets.length === 0) {
      fetchJets({ departure, destination, passengers, page });

    } else if (current === "helicopters" && helicopters.length === 0) {
      fetchHelicopters({ departure, destination, passengers, page: '1' });
    } else if (current === "cars" && cars.length === 0) {
      fetchCars({ departure, destination, passengers, page: '1' });
    }

  }, [departure, destination, passengers, page, current]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
     <section className='sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10'>
      <div className='w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]'></div>  
      <div className='container'>
        <div className='flex flex-col gap-[20px] md:gap-[36px] lg:gap-[48px]'>
          {current === "jets" && (
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
          )}

          {current === "helicopters" && (
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
          )}

          {current === "cars" && (
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
          )}
        </div>

      </div>
    </section>
  )
}

export default VehicleListing