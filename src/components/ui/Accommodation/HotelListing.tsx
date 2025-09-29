import React from 'react'
import RestaurantIconsFilter from '../Experience/RestaurantIconsFilter';
import AccommodationCard from '../AccommodationCard';
import { Accommodation } from '@/stores/AccommodationStore';

export type Hotel = {
    title: string,
    images: string[],
    _id: string,
    location: string,
    price: {lowSeason:number, highSeason:number},
    stars: string
    slug: string
}

const HotelListing = ({ hotels }: { hotels: Hotel[] }) => {
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
    return (
        <section className='sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10'>
            <div className='w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]'></div>

            <RestaurantIconsFilter icons={icons} />
            <div className="container">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-8 mt-6">
                    {hotels.map((item: Hotel, index: number) => (
                        <AccommodationCard
                            key={index}
                            title={item.title}
                            location={item.location}
                            price={item.price.highSeason.toString()}
                            image={`http://localhost:5000/${item.images[0]}`}
                            stars={item.stars || "4"}
                            link={`/hotels/${item.slug}`}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default HotelListing