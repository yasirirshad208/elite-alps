"use client";
import React, { useState, useEffect } from "react";
import { IoMapSharp } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  addresss?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  addresss,
}) => {
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
          if (data.results?.length > 0) {
            setAddress(data.results[0].formatted_address);
          } else {
            setAddress("Address not found");
          }
        } catch {
          setAddress("Unable to fetch address");
        }
      };

      fetchAddress();
    }
  }, [latitude, longitude]);

  // Fix Leaflet marker icon issue
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });

  const position: [number, number] = [latitude, longitude];

  return (
    <div className="bg-white border border-[#e3e3e3] rounded-[12px] p-2">
      {/* 🗺️ Interactive Ski Map */}
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "318px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        {/* Base Map Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* Ski Pistes Overlay */}
        <TileLayer
          url="https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png"
          attribution="© OpenSnowMap contributors"
        />

        <Marker position={position}>
          <Popup>
            Latitude: {latitude}, Longitude: {longitude}
          </Popup>
        </Marker>
      </MapContainer>

      {/* 📍 Address Display */}
      <div className="font-large font-[600] text-[#666D80] md:px-4 px-3 md:py-6 py-4 flex items-center gap-3">
        <IoMapSharp className="text-[#121212] text-[20px]" />
        {addresss || address}
      </div>
    </div>
  );
};

export default MapComponent;
