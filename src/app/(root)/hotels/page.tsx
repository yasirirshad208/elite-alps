import AccommodationHeader from "@/components/ui/Accommodation/AccommodationHeader";
import HotelListing, { Hotel } from "@/components/ui/Accommodation/HotelListing";
import HotelsSlider from "@/components/ui/Accommodation/HotelsSlider";
import AccommodationCard from "@/components/ui/AccommodationCard";
import CountResults from "@/components/ui/CountResults";
import RestaurantIconsFilter from "@/components/ui/Experience/RestaurantIconsFilter";
import MagazineListing from "@/components/ui/MagazineListing";
import SeeMore from "@/components/ui/SeeMore";

export default async function Hotels({ searchParams }: { searchParams: Promise<{ location?: string; price?: string; guest?: string; feature?: string; page?: string }> }) {
  const params = await searchParams;

  const location = params.location || "";
  const price = params.price || "";
  const guest = params.guest || "1";
  const feature = params.feature || ""
  const page = params.page || "1"

  const queryString = new URLSearchParams({
    location,
    adults: guest,
    price,
    feature,
    page,
    isPublic: 'true',
  }).toString();

  const response = await fetch(
    `https://elite-experience-backend.onrender.com/api/accommodations/all/hotel?${queryString}`
  );

  const data = await response.json()

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
    <>
      <AccommodationHeader page="hotels" image='/hotel.png' text="Elevate Your Stay in our Luxury Hotels" />

      {/* <HotelListing hotels={data.accommodations} /> */}
      <section className='sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10'>
        <div className='w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]'></div>

        <div className="container ">
          <div className="sm:mb-[30px] mb-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-[32px]">
                      <div className="overflow-hidden w-full">
                        <RestaurantIconsFilter icons={icons} />
                      </div>
          
                      <div className="sm:w-auto w-full sm:block flex justify-end">
                        <CountResults number={data.accommodations.length} />
                      </div>
                    </div>

        </div>
        <div className="container">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-8 mt-6">
            {data.accommodations.map((item: Hotel, index: number) => (
              <AccommodationCard
                key={index}
                title={item.title}
                location={item.location}
                price={item.price.highSeason.toString()}
                image={`https://elite-experience-backend.onrender.com/${item.images[0]}`}
                stars={item.stars || "4"}
                link={`/hotels/${item.slug}`}
              />
            ))}
          </div>
          {parseInt(page) * 12 < data.countTotalAccommodations && <SeeMore />}
        </div>
      </section >

      <HotelsSlider hotels={data.accommodations} />

      <MagazineListing bgColor={false} />
    </>
  )
}