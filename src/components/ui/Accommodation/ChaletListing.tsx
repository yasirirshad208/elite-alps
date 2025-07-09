'use client';

import { Accommodation, useAccommodationStore } from '@/stores/AccommodationStore';
import React, { useEffect, useState } from 'react';
import AccommodationCard from '../AccommodationCard';
import RestaurantIconsFilter from '../Experience/RestaurantIconsFilter';
import axios from 'axios';
import CountResults from '../CountResults';

const ChaletListing = ({ location, price, guest, feature }: { location: string; feature: string; price: string; guest: string; }) => {
  const [filteredChalets, setFilteredChalets] = useState<Accommodation[]>([])
  const [load, setLoad] = useState(false)
  const {
    chalets,
    loading,
    error,
    fetchAccommodations,
  } = useAccommodationStore();

  useEffect(() => {
    if (chalets.length === 0) {
      fetchAccommodations()
    }
  }, []);




  useEffect(() => {
    if (chalets.length === 0) return;

    const allowedLocations = location
      ? [location.toLowerCase()]
      : ["courchevel", "meribel", "val thorens"];

    const matchesLocationAndFilters = chalets.filter((i: Accommodation) =>
      allowedLocations.some(loc =>
        i.nom_station_en?.[0]?.toLowerCase().includes(loc.toLowerCase())
      ) &&
      parseInt(guest) <= parseInt(i.nb_adultes?.[0] || "0") &&
      parseInt(price || "1000000") >= parseInt(i.prix_appel_hiver?.[0] || "0")
    );

    let isCancelled = false;

    if (feature === "") {
      setFilteredChalets(matchesLocationAndFilters);
      setLoad(false); // ✅ Stop loading immediately when 'All' is selected
      return;
    }

    const fetchWithFeatureFilter = async () => {
      const results: Accommodation[] = [];
      setLoad(true);

      for (const chalet of matchesLocationAndFilters) {
        if (isCancelled) break;

        try {
          const { data: propertyData } = await axios.get(
            `https://elite-experience-backend.onrender.com/api/accommodations/property/detail/${chalet.id_bien[0]}`
          );

          const generalNode =
            propertyData?.data?.propertyDetail?.message?.detail?.[0]
              ?.node_equipement_general?.[0]?.equipement_general;

          if (Array.isArray(generalNode)) {
            const features = generalNode.map((item: any) => {
              const englishLabel = item?.libelle?.find((l: any) => l?.$?.lang === "en");
              return englishLabel?._ || "";
            });

            if (features.some(f => f.toLowerCase() === feature.toLowerCase())) {
              results.push(chalet);
            }
          }
        } catch (err) {
          console.error("Failed to fetch chalet detail", chalet.id_bien);
        }
      }

      if (!isCancelled) {
        setFilteredChalets(results);
        setLoad(false);
      }
    };

    fetchWithFeatureFilter();

    return () => {
      isCancelled = true;
    };
  }, [chalets, location, price, guest, feature]);

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



  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className='sm:mt-[100px] mt-[120px] mb-16 md:mb-12 mb-10'>
      <div className='w-full h-[1px] bg-[#e3e3e3] sm:mb-[30px] mb-[20px]'></div>

      <div className="container ">
        <div className="sm:mb-[30px] mb-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-[32px]">
            <div className="overflow-hidden w-full">
              <RestaurantIconsFilter icons={icons} />
            </div>

            <div className="sm:w-auto w-full sm:block flex justify-end">
              <CountResults number={filteredChalets.length} />
            </div>
          </div>

      </div>
      <div className="container">
        {load ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-8 mt-6">
            {filteredChalets.map((item: Accommodation, index: number) => (
              <AccommodationCard
                key={index}
                title={item.nom_bien_en[0]}
                area={item.surface}
                persons={item.nb_adultes}
                location={item.nom_station_en[0]}
                bedrooms={item.nombre_chambres}
                price={item.prix_appel_hiver[0]}
                image={item.photo_web[0]}
                link={`/chalets/${item.id_bien}`}
              />
            ))}
          </div>
        )}
      </div>
    </section >
  );
};

export default ChaletListing;
