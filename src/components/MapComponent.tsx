"use client"
import React, { useState, useEffect } from "react";
import { IoMapSharp } from "react-icons/io5";

const MapComponent = ({ latitude, longitude, addresss }:{latitude:string, longitude:string, addresss?:string}) => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (latitude && longitude) {
      // Fetch address using Google Maps Geocoding API
      const fetchAddress = async () => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            setAddress(data.results[0].formatted_address);
          } else {
            setAddress("Address not found");
          }
        } catch (error) {
          setAddress("Unable to fetch address");
        }
      };

      fetchAddress();
    }
  }, [latitude, longitude]);

  return (
    <div className="bg-white border border-[#e3e3e3] rounded-[12px] p-2">
      {/* Dynamic Google Maps iframe */}
      <iframe
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        className="w-full md:h-[318px] h-[280px]"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Address Display */}
      <div className="font-large fnt-[600] text-[#666D80] md:px-4 px-3 md:py-6 py-4 flex items-center gap-3">
        <IoMapSharp className="text-[#121212] text-[20px]" />
        {addresss}
      </div>
    </div>
  );
};

export default MapComponent;
