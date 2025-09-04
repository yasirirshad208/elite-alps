"use client"
import BookVehicleSkeleton from "@/components/skeletons/BookVehicleSkeleton";
import MagazineListing from "@/components/ui/MagazineListing";
import BookingVehicle from "@/components/ui/Transfer/BookingVehicle";
import TransferForm from "@/components/ui/Transfer/TransferForm";
import Link from "next/link";
// import VehicleForm from "@/components/VehicleForm";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function BookCar({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://elite-experience-backend.onrender.com/api/car/${slug}`);
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCar();
  }, [slug]);

  if (loading) {
    return <BookVehicleSkeleton/>;
  }

  if (!car) {
    return <p className="text-center text-red-500">Car not found.</p>;
  }


  return (
    <>

      <section className="pt-[90px] md:pt-[100px] lg:pt-[120px] bg-[#EFEFEF]">

        <div>
          <div className="flex items-center gap-1 container">
            <Link href={"/cars"} className="text-[#666d86] font-regular underline">Car</Link>
            <IoIosArrowBack className="text-[#121212]" />
            <span className="text-[#121212] font-regular">Booking Request</span>
          </div>
        </div>

        <div className="flex container mx-auto md:pt-6 pt-4">
          <div className="flex-1">
            <h1 className="heading-h1 text-[#121212] font-[600]">
              BOOKING REQUEST
            </h1>

            <div className="font-medium text-[#666D80]">
              Experience seamless luxury travel — fill out the form to reserve your private car
            </div>
          </div>
          <div className="lg:flex-1">

          </div>
        </div>
        <div className="lg:pt-[48px] md:pt-[36px] pt-[20px] flex flex-col-reverse lg:flex-row container mx-auto xl:gap-10 lg:gap-8 gap-6 items-stretch">
                      {/* LEFT SIDE */}
                      <div className="flex-1 w-full flex flex-col">
                        <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 flex-1" style={{ boxShadow: '0px 4px 12px 0px #9A9A9A1A' }}>
                          <TransferForm name={car.model} transferType="Car" />
                        </div>
                      </div>
            
                      {/* RIGHT SIDE */}
                      <div className="flex-1 font-inter w-full flex flex-col">
            <BookingVehicle seats={car.seats} speed={car.cruisingSpeed} fuelType={car.fuelType} gearType={car.gearType} luggage={car.luggage.cabinBags} details={car.details} name={car.model} hImages={car.images} bookingDetails={car.bookingDetails} />

          </div>
        </div>

        <div className="lg:mt-16 md:my-12 mt-10">
          <MagazineListing bgColor={false} />
        </div>
      </section>


    </>
  );
}
