"use client";

import { useEffect, useState } from "react";
import axios from "axios";
// import VehicleForm from "@/components/VehicleForm";
import MagazineListing from "@/components/ui/MagazineListing";
import BookingVehicle from "@/components/ui/Transfer/BookingVehicle";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import TransferForm from "@/components/ui/Transfer/TransferForm";
import BookVehicleSkeleton from "@/components/skeletons/BookVehicleSkeleton";

export default function BookJet({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [jet, setJet] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJet = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://elite-experience-backend.onrender.com/api/jet/${slug}`);
        setJet(response.data);
      } catch (err) {
        setError("Failed to fetch jet details");
      } finally {
        setLoading(false);
      }
    };
    fetchJet();
  }, [slug]);

  return (
    <>
      

      {loading && <BookVehicleSkeleton/>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {jet && (
        <>
          <section className="pt-[90px] md:pt-[100px] lg:pt-[120px] bg-[#EFEFEF]">

        <div>
          <div className="flex items-center gap-1 container">
            <Link href={"/jets"} className="text-[#666d86] font-regular underline">Jet</Link>
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
              Experience seamless luxury travel — fill out the form to reserve your private jet
            </div>
          </div>
          <div className="lg:flex-1">

          </div>
        </div>

            <div className="lg:pt-[48px] md:pt-[36px] pt-[20px] flex flex-col-reverse lg:flex-row container mx-auto xl:gap-10 lg:gap-8 gap-7 items-stretch">
                      {/* LEFT SIDE */}
                      <div className="flex-1 w-full flex flex-col">
                        <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 flex-1" style={{ boxShadow: '0px 4px 12px 0px #9A9A9A1A' }}>
                          <TransferForm name={jet.model} transferType="Jet" />
                        </div>
                      </div>
            
                      {/* RIGHT SIDE */}
                      <div className="flex-1 font-inter w-full flex flex-col">
                <BookingVehicle
                  passengers={jet.passengerCapacity}
                  speed={jet.cruisingSpeed}
                  engine={jet.engine}
                  softBags={jet.luggage.softBags}
                  luggage={jet.luggage.cabinBags}
                  details={jet.details}
                  name={jet.model}
                  hImages={jet.images}
                  bookingDetails={jet.bookingDetails}
                />
              </div>
            </div>
            <div className="lg:mt-16 md:my-12 mt-10">
          <MagazineListing bgColor={false}/>
          </div>
          </section>


          
        </>
      )}
    </>
  );
}
