"use client"

import React, { useEffect, useMemo, useState } from "react";
import { Range } from "react-range";

interface PriceRangeProps {
  onApplyFilter: (min: number, max: number) => void;
  onClose: () => void;
  min: number;
  max: number;
}

const PriceRange: React.FC<PriceRangeProps> = ({ onApplyFilter, onClose, min, max }) => {
  const STEP = 10000;
  const MIN = 0;
  const MAX = 300000;

  const bars = useMemo(
    () => Array.from({ length: 50 }, () => Math.floor(Math.random() * 50) + 20),
    []
  );

  const [values, setValues] = useState<number[]>([MIN, MAX]);

  // 🔑 sync with parent props
  useEffect(() => {
    setValues([min, max]);
  }, [min, max]);

  const handleInputChange = (index: number, value: string) => {
    const num = parseInt(value) || 0;
    setValues((prev) => {
      const newValues = [...prev];
      newValues[index] = num;
      return newValues;
    });
  };

  return (
    <div className="p-3 bg-white rounded-[12px] border border-[#e3e3e3] max-w-[506px] mx-auto">
      <div className="flex justify-between  mb-4">
        <h2 className="md:text-[20px] text-[18px] font-[600]">Price Range Per Week</h2>
        <button
          className="w-[32px] h-[32px] block md:hidden text-[18px] md:text-[24px] cursor-pointer rounded-full border border-[#e3e3e3] flex justify-center items-center"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="relative h-24 flex items-end">
        {bars.map((height, i) => {
          const position = (i / (bars.length - 1)) * (MAX - MIN);
          const isSelected =
            position >= values[0] && position <= values[1];
          return (
            <div
              key={i}
              style={{
                height: `${height}%`,
                backgroundColor: isSelected ? "#007bff" : "#EFEFEF",
              }}
              className="w-2 mx-[1px] rounded-sm"
            ></div>
          );
        })}

        {/* Range slider */}
        <div className="absolute w-full bottom-[-16px] flex items-center">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(vals) => setValues(vals)}
            renderTrack={({ props, children }) => {
              return (
                <div
                  {...props}
                  style={{
                    height: "3px",
                    width: "100%",
                    background: `linear-gradient(
              to right,
              #efefef ${((values[0] - MIN) / (MAX - MIN)) * 100}%,
              #0074ec ${((values[0] - MIN) / (MAX - MIN)) * 100}%,
              #0074ec ${((values[1] - MIN) / (MAX - MIN)) * 100}%,
              #efefef ${((values[1] - MIN) / (MAX - MIN)) * 100}%
            )`,
                    borderRadius: "3px",
                  }}
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-6 h-6 bg-white border-2 border-[#0074ec] rounded-full shadow-md"
              />
            )}
          />
        </div>

      </div>

      {/* Inputs */}
     <div className="flex flex-wrap md:gap-[40px] gap-[20px] mt-10">
  {/* Minimum */}
  <div className="flex flex-col flex-1 min-w-[140px] gap-2">
    <label className="text-[14px] text-[#121212] font-[600]">Minimum</label>
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#121212] font-medium">€</span>
      <input
        type="text"
        inputMode="numeric"
        value={Number(values[0]).toLocaleString()}
        onChange={(e) => {
          const raw = e.target.value.replace(/,/g, "");
          handleInputChange(0, raw === "" ? "0" : raw);
        }}
        max={300000}
        className="border border-[#e3e3e3] rounded-[999px] pl-8 pr-[18px] py-3 w-full"
      />
    </div>
  </div>

  {/* Maximum */}
  <div className="flex flex-col flex-1 min-w-[140px] gap-2">
    <label className="text-[14px] text-[#121212] font-[600]">Maximum</label>
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#121212] font-medium">€</span>
      <input
        type="text"
        inputMode="numeric"
        value={Number(values[1]).toLocaleString()}
        onChange={(e) => {
          const raw = e.target.value.replace(/,/g, "");
          handleInputChange(1, raw === "" ? "0" : raw);
        }}
        max={300000}
        className="border border-[#e3e3e3] rounded-[999px] pl-8 pr-[18px] py-3 w-full"
      />
    </div>
  </div>
</div>



      {/* Apply Button */}
      <div className="mt-6 flex justify-end">
        <button
          className="sm:w-[152px] w-full bg-[#0074ec] rounded-[9999px] cursor-pointer hover:bg-blue-600 text-white p-3 "
          onClick={() => onApplyFilter(values[0], values[1])}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
