'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import { usePropertyStore } from '@/stores/PropertyStore';
import AccommodationCard from '../AccommodationCard';
import CountResults from '../CountResults';
import SeeMore from '../SeeMore';
import AccommodationIconsFilter from './AccommodationFilters';
import SortBy from '../SortBy';
import AccommodationCardSkeleton from '@/components/skeletons/AccommodationCardSkeleton';
import NoRecord from '../NoRecord';
import { getChaletPrice } from '@/lib/getPropertyPrice';

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
  maxPrice: string;
  guest: string;
  feature: string;
  checkin: string;
  checkout: string;
  page: string;
}) => {
  const [sort, setSort] = useState<string>('recommended');
  const [loading, setLoading] = useState<Boolean>(true);
  const [allApartments, setAllApartments] = useState<any[]>([]);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const lastItemRef = useRef<HTMLDivElement>(null); // Reference to last visible item
  const isLoadingMoreRef = useRef<boolean>(false);
  const previousCountRef = useRef<number>(0); // Track previous count for animations

  const { apartments, error, fetchApartments, countApartments } = usePropertyStore();

  // Fetch data (filters only)
  useEffect(() => {
    const loadData = async () => {
      // Only show full loading on first page or filter changes
      if (page === '1' || !isLoadingMoreRef.current) {
        setLoading(true);
      }

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

      setLoading(false);
    };

    loadData();
  }, [page, checkin, checkout, sort, location, minPrice, maxPrice, guest, feature]);

  // Accumulate apartments when new data arrives
  useEffect(() => {
    if (page === '1') {
      setAllApartments(apartments);
      previousCountRef.current = apartments.length;
      isLoadingMoreRef.current = false;
      setLoadingMore(false);
    } else if (apartments.length > 0) {
      // When loading more, preserve scroll position by maintaining the last visible item
      const lastItemElement = lastItemRef.current;

      if (lastItemElement && isLoadingMoreRef.current) {
        // Get the position of the last item before adding new content
        const rect = lastItemElement.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offsetTop = rect.top + scrollY;

        // Filter out duplicates and add only new apartments
        setAllApartments(prev => {
          const existingIds = new Set(prev.map(apartment => apartment.propertyId));
          const newApartments = apartments.filter(apartment => !existingIds.has(apartment.propertyId));
          const updated = [...prev, ...newApartments];
          previousCountRef.current = prev.length; // Store count before adding new items
          return updated;
        });

        // Restore position after DOM update with a small delay
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: offsetTop - rect.top, behavior: 'instant' });
            // Small delay before hiding loading state for smoother transition
            setTimeout(() => {
              isLoadingMoreRef.current = false;
              setLoadingMore(false);
            }, 100);
          });
        });
      } else {
        // Filter out duplicates even in fallback case
        setAllApartments(prev => {
          const existingIds = new Set(prev.map(apartment => apartment.propertyId));
          const newApartments = apartments.filter(apartment => !existingIds.has(apartment.propertyId));
          previousCountRef.current = prev.length;
          return [...prev, ...newApartments];
        });
        setTimeout(() => {
          isLoadingMoreRef.current = false;
          setLoadingMore(false);
        }, 100);
      }
    }
  }, [apartments, page]);

  // Frontend sorting (apply to allApartments)
  const sortedApartments = useMemo(() => {
    const data = [...allApartments];
    const getPrice = (item: any) => getChaletPrice(item, checkin);

    switch (sort) {
      case 'price_asc':
        return data.sort((a, b) => getPrice(a) - getPrice(b));
      case 'price_desc':
        return data.sort((a, b) => getPrice(b) - getPrice(a));
      case 'bedrooms_asc':
        return data.sort((a, b) => a.rooms - b.rooms);
      case 'bedrooms_desc':
        return data.sort((a, b) => b.rooms - a.rooms);
      default:
        return data;
    }
  }, [allApartments, sort]);

  const icons = [
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
    { name: "Ski locker", iconKey: "GiSkiBoot" },
    { name: "Elevator", iconKey: "BiBuildingHouse" },
    { name: "Centre", iconKey: "MdLocationOn" }
  ];

  if (error) return <div className="text-red-500">{error}</div>;

  // Calculate the index of the last item before loading more
  const lastVisibleIndex = parseInt(page || "1") * 12 - 1;

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
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
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-8 mt-6">
            {loading && allApartments.length === 0 ? (
              Array.from({ length: 8 }).map((_, i) => (
                <AccommodationCardSkeleton key={i} />
              ))
            ) : sortedApartments.length === 0 ? (
              <div className='col-span-full'>
                <NoRecord page='apartments' />
              </div>
            ) : (
              <>
                {sortedApartments.map((item: any, index: number) => {
                  const isNewItem = index >= previousCountRef.current && loadingMore;
                  return (
                    <div
                      key={item.propertyId}
                      ref={index === lastVisibleIndex - 1 ? lastItemRef : null}
                      className={isNewItem ? 'animate-fadeIn' : ''}
                      style={isNewItem ? { animationDelay: `${(index - previousCountRef.current) * 50}ms` } : {}}
                    >
                      <AccommodationCard
                        title={item.name}
                        area={item.surface}
                        persons={item.adults}
                        location={item.station}
                        bedrooms={item.rooms}
                        price={getChaletPrice(item, checkin)}
                        images={item.allImages.slice(0, 7)}
                        id={item.propertyId}
                        link={`/apartments/${item.propertyId}`}
                      />
                    </div>
                  );
                })}
                {loadingMore && (
                  Array.from({ length: 12 }).map((_, i) => (
                    <AccommodationCardSkeleton key={`loading-${i}`} />
                  ))
                )}
              </>
            )}
          </div>

          {parseInt(page || "1") * 12 < countApartments && (
            <SeeMore />
          )}
        </div>
      </section>
    </>
  );
};

export default ApartmentListing;
